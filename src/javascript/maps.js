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
    { lat: 55.126283, lng: 27.621099 },
    { lat: 55.125854, lng: 27.622515 },
    { lat: 55.124968, lng: 27.624254 },
    { lat: 55.124744, lng: 27.62677 },
    { lat: 55.124084, lng: 27.628957 },
    { lat: 55.128915, lng: 27.632848 },
    { lat: 55.129702, lng: 27.634518 },
    { lat: 55.130705, lng: 27.636068 },
    { lat: 55.131282, lng: 27.63911 },
    { lat: 55.130288, lng: 27.642924 },
    { lat: 55.127975, lng: 27.646212 },
    { lat: 55.128073, lng: 27.649023 },
    { lat: 55.129061, lng: 27.652871 },
    { lat: 55.129073, lng: 27.656551 },
    { lat: 55.129655, lng: 27.658797 },
    { lat: 55.12952, lng: 27.659752 },
    { lat: 55.130839, lng: 27.663866 },
    { lat: 55.131734, lng: 27.666849 },
    { lat: 55.131716, lng: 27.670529 },
    { lat: 55.132826, lng: 27.670196 },
    { lat: 55.132875, lng: 27.671505 },
    { lat: 55.13401, lng: 27.670893 }
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
