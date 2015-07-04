$(document).ready(function(){

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
        var jstest = omnivore.kml('../open-data/EasternMetro.kml');//.addTo(map);
        console.log(jstest);
        jstest.setStyle("fillColor","red");
        jstest.addTo(map);
      /*  omnivore.kml('../open-data/Gippsland.kml').addTo(map);
        omnivore.kml('../open-data/Grampians.kml').addTo(map);
        omnivore.kml('../open-data/Hume.kml').addTo(map);
        omnivore.kml('../open-data/Loddon-Mallee.kml').addTo(map);
        omnivore.kml('../open-data/Nth-and-West-Metro.kml').addTo(map);
        omnivore.kml('../open-data/South-Barwon.kml').addTo(map);
        omnivore.kml('../open-data/Southern-Metro.kml').addTo(map);*/




    		// get color depending on population density value
    		function getColor(d) {
    			return d > 2000 ? '#800026' :
    			       d > 1800  ? '#BD0026' :
    			       d > 1700  ? '#E31A1C' :
    			       d > 1600  ? '#FC4E2A' :
    			       d > 1500   ? '#FD8D3C' :
    			       d > 1400   ? '#FEB24C' :
    			       d > 1300   ? '#FED976' :
                 d > 1200   ? '#FED876' :
                 d > 1100   ? '#FED776' :
                 d > 1000   ? '#FED676' :
                 d > 900   ? '#FED576' :
                 d > 800   ? '#FED476' :
                 d > 700   ? '#FED376' :
                 d > 600   ? '#FED276' :
                 d > 500   ? '#FED176' :
                 d > 300   ? '#FED076' :
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
          data.forEach(function(oneD) {
            var customLayer = L.geoJson(null, {
                style: function(feature) {
                    return { color: getColor(oneD.fatality_count) };
                }
              });
              console.log(oneD);
            var  kml = oneD.region;
            var ds = kml.replace(/ /g,"")+".kml";
            var obj = {customLayer:customLayer, kml_file:ds};
            layersArr.push(obj);
            customLayer.addTo(map);
          });

          layersArr.forEach(function(dataSet){
            omnivore.kml('../open-data/'+dataSet.kml_file, null, dataSet.customLayer);
          });
        }



  $('input[name="frm_gender"]:radio').on('change', function() {
    gender = this.value;
    console.log("ccca");
    $.get( "tac", {gender: gender}, function( data ) {
      removeAllLayers();
      refreshMap(data);
    });
  });

  $('input[name="frm_gender"]:radio').on('change', function() {
    gender = this.value;
    console.log("ccca");
    $.get( "tac", {gender: gender}, function( data ) {
      removeAllLayers();
      refreshMap(data);
    });
  });

});
