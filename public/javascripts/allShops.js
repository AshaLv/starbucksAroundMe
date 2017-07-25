function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(40.760975, -73.979729),
    zoom: 2
  });
  var infoWindow = new google.maps.InfoWindow;

  // get customer location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
      };
      var markerMe = new google.maps.Marker({
          map: map,
          position: pos,
          label: {}
      });
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
    });
  } 
  else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
  }



  var markers = document.getElementsByTagName('li');
  Array.prototype.forEach.call(markers, function(markerElem) {
    var name = markerElem.getAttribute('name');
    var point = new google.maps.LatLng(
        parseFloat(markerElem.getAttribute('latitude')),
        parseFloat(markerElem.getAttribute('longitude')));
    var infowincontent = document.createElement('div');
    var strong = document.createElement('strong');
    strong.textContent = name
    infowincontent.appendChild(strong);
    infowincontent.appendChild(document.createElement('br'));
    var marker = new google.maps.Marker({
      map: map,
      position: point,
      label: {}
    });
    marker.addListener('click', function() {
      infoWindow.setContent(infowincontent);
      infoWindow.open(map, marker);
    });
  });
}



function downloadUrl(url, callback) {
  var request = window.ActiveXObject ?
      new ActiveXObject('Microsoft.XMLHTTP') :
      new XMLHttpRequest;

  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      request.onreadystatechange = doNothing;
      callback(request, request.status);
    }
  };

  request.open('GET', url, true);
  request.send(null);
}

function doNothing() {}
