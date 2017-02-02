 var map;
 function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 38.75836694,
      lng: -77.01102734
    },
    zoomControl: false,
    streetViewControl: false,
    scrollwheel: false,
    zoom: 16,
    styles: [{ "stylers": [{ "hue": "#ff1a00" }, { "invert_lightness": true }, { "saturation": -100 }, { "lightness": 33 }, { "gamma": 0.5 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#2D333C" }] }]
  });
  var marker = new google.maps.Marker({
    position: {
      lat: 38.75836694,
      lng: -77.01102734
    },
    map: map,
    icon: 'build/images/marker.png'
  });
 }
