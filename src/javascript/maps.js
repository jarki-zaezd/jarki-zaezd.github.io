var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.14423, lng: 27.6196 },
    zoom: 16,
    mapTypeId: 'satellite'
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

  let iconProp = [
    {
      position: { lat: 55.140116, lng: 27.672326 },
      icon: {
        url:
          "http://icons.iconarchive.com/icons/icons8/ios7/512/Sports-Finish-Flag-icon.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    {
      position: { lat: 55.14467, lng: 27.639635 },
      icon: {
        url: "/home/roman/Jarki-Zaezd/src/assets/images/campsite-png-33984.png",
        scaledSize: new google.maps.Size(50, 50)
      }
    },
    // Лодка
    {
      position: { lat: 55.131991, lng: 27.596559 },
      icon: {
        url:
          "http://chittagongit.com//images/pirate-ship-icon/pirate-ship-icon-4.jpg",
        scaledSize: new google.maps.Size(50, 50)
      }
    },
    // Train
    {
      position: { lat: 55.134217, lng: 27.527428 },
      icon: {
        url:
          "http://chittagongit.com//images/train-icon-png/train-icon-png-18.jpg",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    //angry man
    {
      position: { lat: 55.153612, lng: 27.550817 },
      icon: {
        url:
          "/home/roman/Jarki-Zaezd/src/assets/images/kisspng-screaming-anger-cartoon-clip-art-angry-man-5aa29a93604817.9682612315206058433944.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    // dogs
    {
      position: { lat: 55.157229, lng: 27.624193 },
      icon: {
        url:
          "https://cdn.pixabay.com/photo/2014/04/03/00/42/bulldog-309162_960_720.png",
        scaledSize: new google.maps.Size(40, 30)
      }
    },
    // стог сена
    {
      position: { lat: 55.157335, lng: 27.638088 },
      icon: {
        url: "/home/roman/Jarki-Zaezd/src/assets/images/clip-hay-bale.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    // tower
    {
      position: { lat: 55.150973, lng: 27.65434 },
      icon: {
        url:
          "https://cdn.pixabay.com/photo/2012/05/07/17/07/tower-48712_960_720.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    // alien
    {
      position: { lat: 55.152313, lng: 27.646212 },
      icon: {
        url:
          "/home/roman/Jarki-Zaezd/src/assets/images/kisspng-extraterrestrial-life-extraterrestrials-in-fiction-cartoon-aliens-for-kids-5ab662642201c0.6456369515219021801393.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    // кладбища
    {
      position: { lat: 55.15298, lng: 27.615447 },
      icon: {
        url:
          "/home/roman/Jarki-Zaezd/src/assets/images/kisspng-pills-clipart-comic-free-clipart-on-dumielauxepi-5bad00e24c6cd1.311649421538064610313.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    {
      position: { lat: 55.124901, lng: 27.61236 },
      icon: {
        url:
          "/home/roman/Jarki-Zaezd/src/assets/images/kisspng-pills-clipart-comic-free-clipart-on-dumielauxepi-5bad00e24c6cd1.311649421538064610313.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    // church
    {
      position: { lat: 55.161888, lng: 27.498511 },
      icon: {
        url:
          "https://www.nicepng.com/png/full/36-364495_chapel-clipart-inc-church-church-cartoon.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    // одинокий дом
    {
      position: { lat: 55.143268, lng: 27.632375 },
      icon: {
        url:
          "/home/roman/Jarki-Zaezd/src/assets/images/kisspng-house-cottage-clip-art-old-house-cartoon-5b229b8b0ced62.935825991528994699053.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    // Горящий дом
    {
      position: { lat: 55.148483, lng: 27.566851 },
      icon: {
        url: "https://requestreduce.org/images/burnt-down-house-clipart-5.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    // Вулкан
    {
      position: { lat: 55.138973, lng: 27.559258 },
      icon: {
        url:
          "http://static.familyguy.tinyco.com/decoration_volcano_wip_thumbnail@4x.png",
        scaledSize: new google.maps.Size(50, 50)
      }
    },
    //Resident of evil
    {
      position: { lat: 55.137056, lng: 27.669895 },
      icon: {
        url:
          "http://www.pngmart.com/files/4/Resident-Evil-Logo-PNG-Transparent-Image.png",
        scaledSize: new google.maps.Size(90, 40)
      }
    },
    //Ковбой
    {
      position: { lat: 55.179525, lng: 27.60633 },
      icon: {
        url:
          "http://www.logospng.com/images/178/cowboy-logo-dallas-cowboys-window-wall-decal-vinyl-178578.png",
        scaledSize: new google.maps.Size(60, 50)
      }
    },
    {
      position: { lat: 55.162981, lng: 27.547689 },
      icon: {
        url:
          "/home/roman/Jarki-Zaezd/src/assets/images/59ac2e13a242c6528702d918.png",
        scaledSize: new google.maps.Size(50, 60)
      }
    },
    //белка
    {
      position: { lat: 55.17549, lng: 27.560376 },
      icon: {
        url:
          "https://png2.kisspng.com/sh/bb00b631f872f74c49ba341b259a7e63/L0KzQYi4UcI5N5U1TZGAYUHnRoGAhcI6aWI8SZC9M0G6QYa9VsE2OWI9T6YBOEa0R4G8TwBvbz==/5a1d607e29a171.4317156615118746861705.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    //horse
    {
      position: { lat: 55.171967, lng: 27.557047 },
      icon: {
        url:
          "https://www.pinclipart.com/picdir/big/46-467808_horses-silhouettes-transparent-horse-clipart.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    //мужик на телеге
    {
      position: { lat: 55.117853, lng: 27.558723 },
      icon: {
        url:
          "https://www.clipartmax.com/png/full/104-1040263_cart-driver-carriage-man-silhouette-cartoon-horse-drawn-carriage.png",
        scaledSize: new google.maps.Size(60, 40)
      }
    },
    //mountaint + forest
    {
      position: { lat: 55.146337, lng: 27.510561 },
      icon: {
        url: "https://cdn130.picsart.com/252244832003212.png?r1024x1024",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    //забыл что это :)
    {
      position: { lat: 55.123311, lng: 27.509763 },
      icon: {
        url:
          "https://seamenschurch.org/sites/default/files/image_upload/2-church-color.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    //  водяная мельница
    {
      position: { lat: 55.140419, lng: 27.584359 },
      icon: {
        url: "https://i.dlpng.com/static/png/1202891_thumb.png",
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    // плавающий человек
    {
      position: { lat: 55.15893, lng: 27.671977 },
      icon: {
        url: "http://clipart-library.com/image_gallery/n1600113.png",
        scaledSize: new google.maps.Size(30, 25)
      }
    },
    // police
    {
      position: { lat: 55.189495, lng: 27.639463 },
      icon: {
        url:
          "http://www.stickpng.com/assets/images/580b585b2edbce24c47b2d23.png",
        scaledSize: new google.maps.Size(70, 40)
      }
    }
  ];

  for (let i = 0; i < iconProp.length; i++) {
    let marker = new google.maps.Marker({
      position: iconProp[i].position,
      icon: iconProp[i].icon,
      optimized: false,
      map: map
    });
  }

  // var legend = document.getElementById("legend");
  // for (var key in icons) {
  //   var type = icons[key];
  //   var name = key;
  //   var icon = type.icon;
  //   var div = document.createElement("div");
  //   div.innerHTML = '<img src="' + icon + '"> ' + name;
  //   legend.appendChild(div);
  // }

  // map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

  let points = [{ lat: 55.157407, lng: 27.51089 }],
    start = new google.maps.LatLng(55.140116, 27.672326),
    end = new google.maps.LatLng(55.140116, 27.672326);

  function calculateAndDisplayRoute(
    directionsService,
    directionsDisplay,
    start,
    end,
    points
  ) {
    var waypts = [];
    if (points != undefined) {
      for (let i = 0; i < points.length; i++) {
        waypts.push({
          location: points[i],
          stopover: true
        });
      }
    } else {
      waypts.push({
        location: end,
        stopover: true
      });
    }

    directionsService.route(
      {
        origin: start,
        destination: end,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: "DRIVING"
      },
      function(response, status) {
        if (status === "OK") {
          directionsDisplay.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
  calculateAndDisplayRoute(
    directionsService,
    directionsDisplay,
    start,
    end,
    points
  );
  let start2 = { lat: 55.144227, lng: 27.506352 },
    end2 = { lat: 55.140116, lng: 27.672326 };

  calculateAndDisplayRoute(
    directionsService2,
    directionsDisplay2,
    start2,
    end2
  );

  var flightPlanCoordinates = [
    { lat: 55.157407, lng: 27.51089 },
    { lat: 55.155991, lng: 27.51029 },
    { lat: 55.154299, lng: 27.510376 },
    { lat: 55.150192, lng: 27.512296 },
    { lat: 55.149561, lng: 27.512081 },
    { lat: 55.144227, lng: 27.506352 }
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
