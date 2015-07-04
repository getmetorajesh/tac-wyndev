(function(exports, $, bb){

  //document ready
  $(function(){
    (function($){})(jQuery);
    $(document).ready(function(){
        $('.datepicker').datepicker({
            format: 'dd/mm/yyyy'
        });
    });

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

    App.Models.EnvConfig = Backbone.Model.extend({
        urlRoot:"env-config"
    });

    App.Models.SyncLog = Backbone.Model.extend({
        url:"sync/logs",
        defaults:{
            "is_running":"",
            "last_change_token":"",
            "last_ran_at":"",
            "failed_transfers":"",
            "sync_enabled":""
        }
    });

    var envConfig = new App.Models.EnvConfig();
    var config = envConfig.fetch();

    App.Routers.MainRouter = Backbone.Router.extend({
        routes: {
            "":"showLogs",
            "dashboard":"showDashboard",
            "logs":"showLogs",
            "*path":"notFound"
        },
        showHome:function(){

        },
        showDashboard:function(){
            $("#dynamic_content").empty();
            new App.Views.SyncLog();
            //  new App.Views.Dashboard();
           // vent.trigger("showDashboard:log");
        },

        showLogs:function(){
            $("#dynamic_content").empty();
            var bv = new App.Views.BaseLogView();
        },
        notFound:function(){
            $("#dynamic_content").empty();
            $("#dynamic_content").html("Not Found");
        }
    });

    var appRouter = new App.Routers.MainRouter();
    appRouter.bind("route", function(route, section){
        var routeData = route;
        $(".side-nav li").removeClass("active");
        $("#"+routeData).addClass("active");
    });
    Backbone.history.start();

  });//end document ready

}(this, jQuery, Backbone));


var map = L.map('map').setView([-37.8, 144.96], 5);

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

		info.addTo(map);
    omnivore.kml('../open-data/EasternMetro.kml').addTo(map);
    omnivore.kml('../open-data/Gippsland.kml').addTo(map);
    omnivore.kml('../open-data/Grampians.kml').addTo(map);
    omnivore.kml('../open-data/Hume.kml').addTo(map);
    omnivore.kml('../open-data/Loddon-Mallee.kml').addTo(map);
    omnivore.kml('../open-data/Nth-and-West-Metro.kml').addTo(map);
    omnivore.kml('../open-data/South-Barwon.kml').addTo(map);
    omnivore.kml('../open-data/Southern-Metro.kml').addTo(map);




		// get color depending on population density value
		function getColor(d) {
			return d > 1000 ? '#800026' :
			       d > 500  ? '#BD0026' :
			       d > 200  ? '#E31A1C' :
			       d > 100  ? '#FC4E2A' :
			       d > 50   ? '#FD8D3C' :
			       d > 20   ? '#FEB24C' :
			       d > 10   ? '#FED976' :
			                  '#FFEDA0';
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

		geojson = L.geoJson(statesData, {
			style: style,
			onEachFeature: onEachFeature
		}).addTo(map);

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
