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
    let points = [{ lat: 55.094033, lng: 27.398867 }];
    var waypts = [];
    for (var i = 0; i < points.length; i++) {
      waypts.push({
        location: points[i],
        stopover: true
      });
    }

    directionsService.route(
      {
        origin: { lat: 55.14947, lng: 27.377256 },
        destination: { lat: 55.140125, lng: 27.672401 },
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

  // directionsService2.route(
  //   {
  //     origin: { lat: 55.194671, lng: 27.634769 },
  //     destination: { lat: 55.140116, lng: 27.672326 },
  //     optimizeWaypoints: true,
  //     travelMode: "DRIVING"
  //   },
  //   function(response, status) {
  //     if (status === "OK") {
  //       directionsDisplay2.setDirections(response);
  //       var route = response.routes[0];
  //       var summaryPanel = document.getElementsByClassName("totalDist")[0];
  //       let allDistance = 0;
  //       for (var i = 0; i < route.legs.length; i++) {
  //         allDistance += parseInt(route.legs[i].distance.text);
  //       }
  //       summaryPanel.innerHTML += allDistance + "км";
  //       bounds.union(response.routes[0].bounds);
  //       map.fitBounds(bounds);
  //     } else {
  //       window.alert("Directions request failed due to " + status);
  //     }
  //   }
  // );

  var flightPlanCoordinates = [
    { lat: 55.184259, lng: 27.59436 },
    { lat: 55.182868, lng: 27.596677 },
    { lat: 55.179542, lng: 27.606365 },
    { lat: 55.182274, lng: 27.60784 },
    { lat: 55.185125, lng: 27.607996 },
    { lat: 55.186099, lng: 27.608377 },
    { lat: 55.186626, lng: 27.609353 },
    { lat: 55.186356, lng: 27.610683 },
    { lat: 55.185805, lng: 27.611788 },
    { lat: 55.186359, lng: 27.614459 },
    { lat: 55.186874, lng: 27.620859 },
    { lat: 55.186396, lng: 27.623933 },
    { lat: 55.187679, lng: 27.625054 },
    { lat: 55.189327, lng: 27.625161 },
    { lat: 55.191593, lng: 27.627199 },
    { lat: 55.192414, lng: 27.628181 },
    { lat: 55.193391, lng: 27.628739 },
    { lat: 55.194003, lng: 27.632832 },
    { lat: 55.194441, lng: 27.633111 },
    { lat: 55.194671, lng: 27.634769 }
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
