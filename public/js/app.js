(function($){})(jQuery);

  //document ready
  $(function(){  });//end document ready

    window.App ={
      Models:{},
      Collections:{},
      Views:{},
      PageableCollection:{},
      Routers:{}
    };


  window.template = function(id){
      return _.template("#"+id).html();
  };

  // Global events:
  var vent =  _.extend({}, Backbone.Events);

  App.Models.Tac = Backbone.Model.extend({
      urlRoot:"tac"
  });

  App.Views.TacMap = Backbone.View.extend({
    el:$("#main_content"),
    tagName: 'li',
        template: _.template($("#tpl_map").html()),
        initialize: function(){
          var tacData = new App.Models.Tac();
          this.render(tacData.fetch());
        },

        render: function(){
          console.log("dasda");
            // var tmpl = _.template(this.template);
            // this.$el.html(tmpl(this.model));
            // return this.$el.append();
            this.$el.html(this.template(this.model));
            return this;
        }

    });

    App.Routers.MainRouter = Backbone.Router.extend({
       routes: {
           "":"showMap",
           "dashboard":"showDashboard",
           "logs":"showLogs",
          // "*path":"notFound"
       },

       showMap:function(){
           //$("#dynamic_content").empty();
           console.log("fdsf");
           new App.Views.TacMap();
           //  new App.Views.Dashboard();
          // vent.trigger("showDashboard:log");
       }
     });

     var appRouter = new App.Routers.MainRouter();
      appRouter.bind("route", function(route, section){
          var routeData = route;
          // $(".side-nav li").removeClass("active");
          // $("#"+routeData).addClass("active");
      });
      Backbone.history.start();


// END of Backbone App
$(document).ready(function(){
    var colors = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"];
    var map = L.map('map').setView([-37.8, 144.96], 6);
    var age_group = [ '0-4','5-15','16-17', '18-20', '21-25',  '26-29', '30-39','40-49','60-69', '70+', '50-59',  'UNKNOWN'];
    		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    			maxZoom: 18,
    			id: 'examples.map-20v6611k'
    		}).addTo(map);


    		// control that shows state info on hover
    		var info = L.control();

    		info.onAdd = function (map) {
    			this._div = L.DomUtil.create('div', 'info');
    			this.update();
    			return this._div;
    		};

    		info.update = function (props) {
    			this._div.innerHTML = '<h4>Transport Accident Commission</h4>' +  (props ?
    				'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
    				: 'Hover over a state');
    		};

    		// get color depending on population density value
    		function getColor(index) {
          if( index <= colors.length )
    			   return colors[index];
          return "#fff";
    		}

    		function style(feature) {
    			return {
    				weight: 2,
    				opacity: 1,
    				color: 'white',
    				dashArray: '3',
    				fillOpacity: 0.7,
    				fillColor: getColor(feature.properties.density)
    			};
    		}

    		function highlightFeature(e) {
    			var layer = e.target;

    			layer.setStyle({
    				weight: 5,
    				color: '#666',
    				dashArray: '',
    				fillOpacity: 0.7
    			});

    			if (!L.Browser.ie && !L.Browser.opera) {
    				layer.bringToFront();
    			}

    			info.update(layer.feature.properties);
    		}

    		var geojson;

    		function resetHighlight(e) {
    			geojson.resetStyle(e.target);
    			info.update();
    		}

    		function zoomToFeature(e) {
    			map.fitBounds(e.target.getBounds());
    		}

    		function onEachFeature(feature, layer) {
    			layer.on({
    				mouseover: highlightFeature,
    				mouseout: resetHighlight,
    				click: zoomToFeature
    			});
    		}

    layersArr=[];
    		// geojson = L.geoJson(statesData, {
    		// 	style: style,
    		// 	onEachFeature: onEachFeature
    		// }).addTo(map);

    		map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');
    		var legend = L.control({position: 'bottomright'});

    		legend.onAdd = function (map) {

    			var div = L.DomUtil.create('div', 'info legend'),
    				grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    				labels = [],
    				from, to;

    			for (var i = 0; i < grades.length; i++) {
    				from = grades[i];
    				to = grades[i + 1];

    				labels.push(
    					'<i style="background:' + getColor(from + 1) + '"></i> ' +
    					from + (to ? '&ndash;' + to : '+'));
    			}

    			div.innerHTML = labels.join('<br>');
    			return div;
    		};

    		legend.addTo(map);

        function removeAllLayers(){
          layersArr.forEach(function(lyr){
            map.removeLayer(lyr.customLayer);
          });
        }

        function refreshMap(data){
          layersArr =[];
          for(var i=0; i< data.length-1; i++){
            var oneD = data[i];
            var customLayer = L.geoJson(null, {
                style:getFeatureStyle(i)
              });
              console.log(oneD);
            var  kml = oneD.region;
            var ds = kml.replace(/ /g,"")+".kml";
            var obj = {customLayer:customLayer, kml_file:ds};
            layersArr.push(obj);
            customLayer.addTo(map);
          }


          layersArr.forEach(function(dataSet){
            omnivore.kml('../open-data/'+dataSet.kml_file, null, dataSet.customLayer);
          });
        }

        function getFeatureStyle(index){
              return { color: getColor(index) };
        }

        function updateRiskProfile(data){
          var area_type = data.area_type.area_type;
          var day_type =data.day_type.day_type;
          var time_type = data.time_type.time_type;
          var age_type = data.age_type.age_type;
          var road_crash_type = data.road_crash_type.road_crash_type;
          var str = "Your personalised driver aware profile advises that you take extra care when driving in "+area_type+", especially when driving on "+day_type+" and driving during the "+time_type+". "+age_type+" that are need to be particularly aware "+road_crash_type+". ";
          $("#risk_profile").text(str);
        }

  $('input[name="frm_gender"]:radio, select[name="frm_age"]').on('change', function() {
    var gender = $("input[name='frm_gender']").val();
    var age_group = $("#frm_age :selected").text();
    console.log("ccca");
    $.get( "tac", {gender: gender, age_group:age_group}, function( data ) {
      removeAllLayers();
      refreshMap(data);
    });

    $.get( "graph", {gender: gender, age_group:age_group}, function( data ) {
      d3.selectAll("#chart svg").remove();
      updateChart(data);
    });

    $.get( "riskProfile", {gender: gender, age_group:age_group}, function( data ) {
      updateRiskProfile(data);
    });

  });

});
