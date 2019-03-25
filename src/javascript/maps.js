var map;
      function initMap() {
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer({
          suppressMarkers: true
        });

        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 55.14423, lng: 27.6196 },
          zoom: 16
        });
        directionsDisplay.setMap(map);

        function calculateAndDisplayRoute(
          directionsService,
          directionsDisplay
        ) {
          let points = [
            { lat: 55.14523, lng: 27.6216 },
            { lat: 55.14723, lng: 27.6236 },
            { lat: 55.15423, lng: 27.6256 },
            { lat: 55.16423, lng: 27.6276 }
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
              origin: { lat: 55.13523, lng: 27.6116 },
              destination: { lat: 55.17423, lng: 27.6876 },
              waypoints: waypts,
              optimizeWaypoints: true,
              travelMode: "DRIVING"
            },
            function(response, status) {
              if (status === "OK") {
                directionsDisplay.setDirections(response);
                var route = response.routes[0];
                var summaryPanel = document.getElementsByClassName(
                  "totalDist"
                )[0];
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