var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.14423, lng: 27.6196 },
    zoom: 16
  });

  var directionsService = new google.maps.DirectionsService();
  var directionsService2 = new google.maps.DirectionsService();

  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map,
    suppressMarkers: true
  });
  var directionsDisplay2 = new google.maps.DirectionsRenderer({
    map: map,
    suppressMarkers: true
  });

  directionsDisplay.setMap(map);
  var bounds = new google.maps.LatLngBounds();
  var iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

  var icons = {
    parking: {
      icon: iconBase + "parking_lot_maps.png"
    },
    library: {
      icon: iconBase + "library_maps.png"
    },
    info: {
      icon: iconBase + "info-i_maps.png"
    }
  };

  var features = [
    {
      position: { lat: 55.140116, lng: 27.672326 },
      type: "info"
    },
    {
      position: { lat: 55.1458168, lng: 27.6308895 },
      type: "info"
    },
    {
      position: { lat: 55.156567, lng: 27.629146 },
      type: "info"
    },
    {
      position: { lat: 55.1523454, lng: 27.6207906 },
      type: "info"
    },
    {
      position: { lat: 55.144429, lng: 27.617639 },
      type: "info"
    },
    {
      position: { lat: 55.1401348, lng: 27.6718545 },
      type: "info"
    }
  ];
  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map
    });
  }

  var legend = document.getElementById("legend");
  for (var key in icons) {
    var type = icons[key];
    // console.log(type);
    var name = key;
    var icon = type.icon;
    var div = document.createElement("div");
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    let points = [{ lat: 55.132476, lng: 27.629894 }];
    var waypts = [];
    for (var i = 0; i < points.length; i++) {
      waypts.push({
        location: points[i],
        stopover: true
      });
    }

    directionsService.route(
      {
        origin: { lat: 55.1401338, lng: 27.6717605 },
        destination: { lat: 55.126283, lng: 27.621099 },
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: "DRIVING"
      },
      function(response, status) {
        if (status === "OK") {
          directionsDisplay.setDirections(response);
          var route = response.routes[0];
          var summaryPanel = document.getElementsByClassName("totalDist")[0];
          let allDistance = 0;
          for (var i = 0; i < route.legs.length; i++) {
            allDistance += parseInt(route.legs[i].distance.text);
          }
          summaryPanel.innerHTML += allDistance + "км";
          bounds.union(response.routes[0].bounds);
          map.fitBounds(bounds);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
  calculateAndDisplayRoute(directionsService, directionsDisplay);

  directionsService2.route(
    {
      origin: { lat: 55.13401, lng: 27.670893 },
      destination: { lat: 55.1401338, lng: 27.6717605 },
      optimizeWaypoints: true,
      travelMode: "DRIVING"
    },
    function(response, status) {
      if (status === "OK") {
        directionsDisplay2.setDirections(response);
        var route = response.routes[0];
        var summaryPanel = document.getElementsByClassName("totalDist")[0];
        let allDistance = 0;
        for (var i = 0; i < route.legs.length; i++) {
          allDistance += parseInt(route.legs[i].distance.text);
        }
        summaryPanel.innerHTML += allDistance + "км";
        bounds.union(response.routes[0].bounds);
        map.fitBounds(bounds);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );

  var flightPlanCoordinates = [
    { lat: 55.133514, lng: 27.671614 },
    { lat: 55.133546, lng: 27.671636 },
    { lat: 55.133627, lng: 27.671489 },
    { lat: 55.133639, lng: 27.671154 },
    { lat: 55.133696, lng: 27.671141 },
    { lat: 55.133721, lng: 27.671466 },
    { lat: 55.133345, lng: 27.672394 },
    { lat: 55.133313, lng: 27.672356 },
    { lat: 55.133483, lng: 27.67168 }
  ];

  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "blue",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
}
