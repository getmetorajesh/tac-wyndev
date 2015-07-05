// END of Backbone App
$(document).ready(function(){
    var colors = ["#8c2d04", "#d94801", "#f16913", "#fd8d3c", "#fdae6b", "#fdd0a2", "#fee6ce", "#fff5eb"];
    var map = L.map('map').setView([-37.8, 144.96], 6);
    var age_group = [ '0-4','5-15','16-17', '18-20', '21-25',  '26-29', '30-39','40-49','60-69', '70+', '50-59',  'UNKNOWN'];
    		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    			maxZoom: 18,
    			id: 'examples.map-20v6611k'
    		}).addTo(map);

        var grades =[];
        var resultData =[];

    		// control that shows state info on hover
    		var info = L.control();

    		info.onAdd = function (map) {
    			this._div = L.DomUtil.create('div', 'info');
    			this.update();
    			return this._div;
    		};

    		info.update = function (props) {
    			this._div.innerHTML = '<h6>Transport Accident Commission</h6>';
    		};

        info.addTo(map);

    		// get color depending on population density value
    		function getColor(index) {
          if( index <= colors.length )
    			   return colors[index];
          else{
            return colors[7];
          }
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
    		map.attributionControl.addAttribution('');
        var legend = L.control({position: 'bottomright'});

        function createLegend(){
        		legend.onAdd = function (map) {
        			var div = L.DomUtil.create('div', 'info legend');
              var	labels = [],
        				from, to;

        			for (var i = 0; i < grades.length; i++) {
        				from = grades[i];
        				to = grades[i + 1];

        				labels.push(
        					'<i style="background:' + getColor(i) + '"></i> ' +
        					from);
        			}

        			div.innerHTML = labels.join('<br>');
        			return div;
        		};

            legend.addTo(map);
        }

        function removeAllLayers(){
          layersArr.forEach(function(lyr){
            map.removeLayer(lyr.customLayer);
          });
        }

        function refreshMap(data){
          layersArr =[];
          for(var i=0; i<= data.length-1; i++){
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
              return { color: getColor(index),
              fillColor: getColor(index),
               dashArray: '2',
               weight: 2,
               opacity: 1,
               fillOpacity: 0.75};
        }

        function updateRiskProfile(data, search_params){
          var area_type = data.area_type.area_type;
          var day_type =data.day_type.day_type;
          day_type = day_type+"S";
          var time_type = data.time_type.time_type;
          var age_type = data.age_type.age_type;
          var road_crash_type = data.road_crash_type.road_crash_type;
          var str = "Your personalised driver aware profile advises that you take extra care when driving in <span class='profile_highlights1'>"+area_type+"</span> areas, especially when driving on <span class='profile_highlights2'>"+day_type+"</span> and driving during the <span class='profile_highlights3'>"+time_type+"</span>. <span class='profile_highlights4'>"+age_type+" "+ search_params.gender +" drivers</span> need to be particularly aware <span class='profile_highlights5'>"+road_crash_type+"</span>. ";
          $("#risk_profile").html(str);
        }

      createLegend();

  $('input[name="frm_gender"]:radio, select[name="frm_age"]').on('change', function() {
    var gender = $("input[name=frm_gender]:checked").val();
    var age_group = $("#frm_age :selected").text();

    if(gender === "FEMALE"){
      $(".profile_image i").addClass("fa-female");
      $(".profile_image i").removeClass("fa-male");
    }else{
      $(".profile_image i").addClass("fa-male");
      $(".profile_image i").removeClass("fa-female");
    }
    $.get( "tac", {gender: gender, age_group:age_group}, function( data ) {
      removeAllLayers();
      // update grades global
      grades=[];
      updateGrades(data);

      legend.removeFrom(map);
      createLegend();
      refreshMap(data);
    });

    var updateGrades = function(data){
      data.forEach(function(d){
        grades.push(d.fatality_count);
      });
    };

    $.get( "graph", {gender: gender, age_group:age_group}, function( data ) {
      d3.selectAll("#chart svg").remove();
      updateChart(data);
    });

    $.get( "riskProfile", {gender: gender, age_group:age_group}, function( data ) {
      updateRiskProfile(data, {gender: gender, age_group:age_group});
    });

  });

});
