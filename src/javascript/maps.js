var map;
function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer({
    suppressMarkers: true
    // polylineOptions: {
    //   strokeColor: ["green"]
    // }
  });

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.14423, lng: 27.6196 },
    zoom: 16
  });
  directionsDisplay.setMap(map);

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
    let points = [
      { lat: 55.1458168, lng: 27.6308895 },
      { lat: 55.156567, lng: 27.629146 },
      { lat: 55.1523454, lng: 27.6207906 },
      { lat: 55.144429, lng: 27.617639 }
    ];
    var waypts = [];
    for (var i = 0; i < points.length; i++) {
      waypts.push({
        location: points[i],
        stopover: true
      });
    }

    directionsService.route(
      {
        origin: { lat: 55.140116, lng: 27.672326 },
        destination: { lat: 55.1401348, lng: 27.6718545 },
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
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
  calculateAndDisplayRoute(directionsService, directionsDisplay);

  // let flightPlanCoordinates = [
  //   { lat: 55.140063, lng: 27.670111 },
  //   { lat: 55.145812, lng: 27.629261 },
  //   { lat: 55.156617, lng: 27.61696 }
  // ];

  // var flightPath = new google.maps.Polyline({
  //   path: flightPlanCoordinates,
  //   geodesic: true,
  //   strokeColor: "#FF0000",
  //   strokeOpacity: 1.0,
  //   strokeWeight: 2
  // });

  // flightPath.setMap(map);
}
