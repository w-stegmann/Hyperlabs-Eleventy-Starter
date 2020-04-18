'use strict';

import $ from 'jquery/dist/jquery'

var mapboxList = {
	init: function() {

		// Get Locations
		var obj_locations = (function() {
			var obj_locations = null;
			$.ajax({
				'async': false,
				'global': false,
				'url': "/orte/orte.geojson",
				'dataType': "json",
				'success': function (data) {
					obj_locations = data;
				}
			});
			return obj_locations;
		})();

		// Access token
		mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpbm5lcnVuZ3NhdGxhcyIsImEiOiJjanU1c2d6cG8xY2M1M3lyMTNieGhlcTN2In0.RlWxLsoF7pi8B0NoP-K54w';

		// Init Map
		let map = new mapboxgl.Map({
			container: 'mapbox',
			style: 'mapbox://styles/mapbox/streets-v11',
			zoom: 8,
			dragRotate: false,
			fadeDuration: 100,
			center: [6.4652675, 49.78806799],
		});

		map.addControl(new mapboxgl.NavigationControl({
			showCompass: false
		}));

		// Add scale for banana
		var scale = new mapboxgl.ScaleControl({
			maxWidth: 80,
			unit: 'metric'
		});
		map.addControl(scale, 'bottom-right');

		// Add User location button
		let geolocate = new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true,
				watchPosition: true
			},
			trackUserLocation: true
		});
		map.addControl(geolocate, 'top-left');

		// Set Markers
		obj_locations.features.forEach(function(marker) {
			let el = document.createElement('a');
			el.className = 'marker';
			el.setAttribute("data-id", marker.properties.id );
			el.setAttribute("data-title", marker.properties.title );
			el.setAttribute("data-type", "place" );
			el.setAttribute("href", marker.properties.href);
			el.style.backgroundImage = 'url(' + marker.properties.icon.url + ')';

			let popup = new mapboxgl.Popup({
				closeButton: false,
				closeOnClick: true,
				className: 'popup-' + marker.properties.id
			})
				.setHTML(marker.properties.title);

			new mapboxgl.Marker(el)
				.setLngLat(marker.geometry.coordinates)
				.setPopup(popup)
				.addTo(map);
		});

		// Get bounds
		let bounds = new mapboxgl.LngLatBounds();
		obj_locations.features.forEach(function(marker) {
			bounds.extend(marker.geometry.coordinates);
		});

		// Fit markers
		function fitBounds(bounds, animate) {
			$(document).ready(function() {
				map.resize();
				map.fitBounds(bounds, {
					padding: {
						top: 60,
						bottom: 60,
						left: 60,
						right: 60
					},
					animate: animate
				});

			});
		}
		fitBounds(bounds, false);

		// Center
		$('.fly-to').mouseenter(function() {
			let coordinates = $(this).data("coordinates");
			map.flyTo({center: coordinates, zoom: 18});
		});
		$('.fly-to').mouseleave(function() {
			fitBounds(bounds, true);
		});

		// SingleOrte Map
		if ( $('#mapbox').data("coordinates") ) {
			$(document).ready(function() {
				let coordinates = $('#mapbox').data("coordinates");
				map.resize();
				map.flyTo({center: coordinates, zoom: 19});
			});
		}

	}
};

export {mapboxList};
