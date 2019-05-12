var map;

setTimeout(() => {
  $(".fog").addClass("animated delay-0.1s slower fadeOut");

  setTimeout(() => {
    $(".fog").remove();
  }, 3000);
}, 2000);

let currentPath = window.location.pathname,
  idInPath = currentPath.split("/")[3],
  tripId = { id: idInPath };

$.ajax({
  url: "/getTripsForId",
  method: "POST",
  data: tripId,
  success: function(data) {
    console.log(data);
    initMap(data);
  },
  error: function(xhr, ajaxOptions, thrownError) {
    console.log(xhr.status);
    console.log(thrownError);
  }
});
function initMap(data) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.14423, lng: 27.6196 },
    zoom: 16
  });
  let night = document.querySelector(".night");
  night.addEventListener("click", function(ev) {
    ev.preventDefault();
    setNightMode();
  });
  function setNightMode() {
    map.setOptions({
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }]
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }]
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }]
        }
      ]
    });
  }

  let light = document.querySelector(".light");
  light.addEventListener("click", function(ev) {
    ev.preventDefault();
    setLightMode();
  });
  function setLightMode() {
    map.setOptions({ styles: [] });
  }

  let forest = document.querySelector(".forest");
  forest.addEventListener("click", function(ev) {
    ev.preventDefault();
    setForestMode();
  });
  function setForestMode() {
    map.setOptions({
      styles: [
        { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#c9b2a6" }]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "geometry.stroke",
          stylers: [{ color: "#dcd2be" }]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [{ color: "#ae9e90" }]
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [{ color: "#dfd2ae" }]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#dfd2ae" }]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#93817c" }]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ color: "#a5b076" }]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#447530" }]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#f5f1e6" }]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{ color: "#fdfcf8" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#f8c967" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#e9bc62" }]
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [{ color: "#e98d58" }]
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry.stroke",
          stylers: [{ color: "#db8555" }]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [{ color: "#806b63" }]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [{ color: "#dfd2ae" }]
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.fill",
          stylers: [{ color: "#8f7d77" }]
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ebe3cd" }]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [{ color: "#dfd2ae" }]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [{ color: "#b9d3c2" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#92998d" }]
        }
      ]
    });
  }

  let aubergine = document.querySelector(".aubergine");
  aubergine.addEventListener("click", function(ev) {
    ev.preventDefault();
    setAubergineMode();
  });
  function setAubergineMode() {
    map.setOptions({
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#1d2c4d"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8ec3b9"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1a3646"
            }
          ]
        },
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4b6878"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#64779e"
            }
          ]
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4b6878"
            }
          ]
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#334e87"
            }
          ]
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              color: "#023e58"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#283d6a"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#6f9ba5"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#023e58"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3C7680"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#304a7d"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#98a5be"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#2c6675"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#255763"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#b0d5ce"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#023e58"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#98a5be"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#283d6a"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#3a4762"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#0e1626"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#4e6d70"
            }
          ]
        }
      ]
    });
  }

  let silver = document.querySelector(".silver");
  silver.addEventListener("click", function(ev) {
    ev.preventDefault();
    setSilverMode();
  });
  function setSilverMode() {
    map.setOptions({
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#dadada"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#c9c9c9"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        }
      ]
    });
  }
  let assassin = document.querySelector(".assassin");
  assassin.addEventListener("click", function(ev) {
    ev.preventDefault();
    setAssassinMode();
  });
  function setAssassinMode() {
    map.setOptions({
      styles: [
        {
          featureType: "all",
          elementType: "all",
          stylers: [
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            },
            {
              saturation: "-100"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36
            },
            {
              color: "#000000"
            },
            {
              lightness: 40
            },
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off"
            },
            {
              color: "#000000"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#4d6059"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4d6059"
            }
          ]
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#4d6059"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#4d6059"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4d6059"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#7f8d89"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#7f8d89"
            },
            {
              lightness: 29
            },
            {
              weight: 0.2
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#7f8d89"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7f8d89"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#7f8d89"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#2b3638"
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#2b3638"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#24282b"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#24282b"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        }
      ]
    });
  }

  let gta = document.querySelector(".gta");
  gta.addEventListener("click", function(ev) {
    ev.preventDefault();
    setGtaMode();
  });
  function setGtaMode() {
    map.setOptions({
      styles: [
        {
          featureType: "all",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#38692d"
            }
          ]
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#989898"
            }
          ]
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#000000"
            }
          ]
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#386c28"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "poi.attraction",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "poi.business",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "poi.government",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "poi.medical",
          elementType: "geometry",
          stylers: [
            {
              color: "#fcfcfc"
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "poi.medical",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#788c40"
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "geometry",
          stylers: [
            {
              invert_lightness: true
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "poi.school",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "poi.sports_complex",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry.fill",
          stylers: [
            {
              weight: "0.01"
            },
            {
              saturation: "-33"
            },
            {
              visibility: "on"
            },
            {
              hue: "#ff0000"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            },
            {
              weight: "0.01"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ff0000"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#7088b0"
            }
          ]
        }
      ]
    });
  }

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

  // let iconProp = [
  //   {
  //     position: { lat: 55.140116, lng: 27.672326 },
  //     icon: {
  //       url:
  //         "http://icons.iconarchive.com/icons/icons8/ios7/512/Sports-Finish-Flag-icon.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   {
  //     position: { lat: 55.14467, lng: 27.639635 },
  //     icon: {
  //       url: "/home/roman/Jarki-Zaezd/src/assets/images/campsite-png-33984.png",
  //       scaledSize: new google.maps.Size(50, 50)
  //     }
  //   },
  //   // Лодка
  //   {
  //     position: { lat: 55.131991, lng: 27.596559 },
  //     icon: {
  //       url:
  //         "http://chittagongit.com//images/pirate-ship-icon/pirate-ship-icon-4.jpg",
  //       scaledSize: new google.maps.Size(50, 50)
  //     }
  //   },
  //   // Train
  //   {
  //     position: { lat: 55.134217, lng: 27.527428 },
  //     icon: {
  //       url:
  //         "http://chittagongit.com//images/train-icon-png/train-icon-png-18.jpg",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   //angry man
  //   {
  //     position: { lat: 55.153612, lng: 27.550817 },
  //     icon: {
  //       url:
  //         "/home/roman/Jarki-Zaezd/src/assets/images/kisspng-screaming-anger-cartoon-clip-art-angry-man-5aa29a93604817.9682612315206058433944.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   // dogs
  //   {
  //     position: { lat: 55.157229, lng: 27.624193 },
  //     icon: {
  //       url:
  //         "https://cdn.pixabay.com/photo/2014/04/03/00/42/bulldog-309162_960_720.png",
  //       scaledSize: new google.maps.Size(40, 30)
  //     }
  //   },
  //   // стог сена
  //   {
  //     position: { lat: 55.157335, lng: 27.638088 },
  //     icon: {
  //       url: "/home/roman/Jarki-Zaezd/src/assets/images/clip-hay-bale.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   // tower
  //   {
  //     position: { lat: 55.150973, lng: 27.65434 },
  //     icon: {
  //       url:
  //         "https://cdn.pixabay.com/photo/2012/05/07/17/07/tower-48712_960_720.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   // alien
  //   {
  //     position: { lat: 55.152313, lng: 27.646212 },
  //     icon: {
  //       url:
  //         "/home/roman/Jarki-Zaezd/src/assets/images/kisspng-extraterrestrial-life-extraterrestrials-in-fiction-cartoon-aliens-for-kids-5ab662642201c0.6456369515219021801393.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   // кладбища
  //   {
  //     position: { lat: 55.15298, lng: 27.615447 },
  //     icon: {
  //       url:
  //         "/home/roman/Jarki-Zaezd/src/assets/images/kisspng-pills-clipart-comic-free-clipart-on-dumielauxepi-5bad00e24c6cd1.311649421538064610313.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   {
  //     position: { lat: 55.124901, lng: 27.61236 },
  //     icon: {
  //       url:
  //         "/home/roman/Jarki-Zaezd/src/assets/images/kisspng-pills-clipart-comic-free-clipart-on-dumielauxepi-5bad00e24c6cd1.311649421538064610313.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   // church
  //   {
  //     position: { lat: 55.161888, lng: 27.498511 },
  //     icon: {
  //       url:
  //         "https://www.nicepng.com/png/full/36-364495_chapel-clipart-inc-church-church-cartoon.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   // одинокий дом
  //   {
  //     position: { lat: 55.143268, lng: 27.632375 },
  //     icon: {
  //       url:
  //         "/home/roman/Jarki-Zaezd/src/assets/images/kisspng-house-cottage-clip-art-old-house-cartoon-5b229b8b0ced62.935825991528994699053.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   // Горящий дом
  //   {
  //     position: { lat: 55.148483, lng: 27.566851 },
  //     icon: {
  //       url: "https://requestreduce.org/images/burnt-down-house-clipart-5.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   // Вулкан
  //   {
  //     position: { lat: 55.138973, lng: 27.559258 },
  //     icon: {
  //       url:
  //         "http://static.familyguy.tinyco.com/decoration_volcano_wip_thumbnail@4x.png",
  //       scaledSize: new google.maps.Size(50, 50)
  //     }
  //   },
  //   //Resident of evil
  //   {
  //     position: { lat: 55.137056, lng: 27.669895 },
  //     icon: {
  //       url:
  //         "http://www.pngmart.com/files/4/Resident-Evil-Logo-PNG-Transparent-Image.png",
  //       scaledSize: new google.maps.Size(90, 40)
  //     }
  //   },
  //   //Ковбой
  //   {
  //     position: { lat: 55.179525, lng: 27.60633 },
  //     icon: {
  //       url:
  //         "http://www.logospng.com/images/178/cowboy-logo-dallas-cowboys-window-wall-decal-vinyl-178578.png",
  //       scaledSize: new google.maps.Size(60, 50)
  //     }
  //   },
  //   {
  //     position: { lat: 55.162981, lng: 27.547689 },
  //     icon: {
  //       url:
  //         "/home/roman/Jarki-Zaezd/src/assets/images/59ac2e13a242c6528702d918.png",
  //       scaledSize: new google.maps.Size(50, 60)
  //     }
  //   },
  //   //белка
  //   {
  //     position: { lat: 55.17549, lng: 27.560376 },
  //     icon: {
  //       url:
  //         "https://png2.kisspng.com/sh/bb00b631f872f74c49ba341b259a7e63/L0KzQYi4UcI5N5U1TZGAYUHnRoGAhcI6aWI8SZC9M0G6QYa9VsE2OWI9T6YBOEa0R4G8TwBvbz==/5a1d607e29a171.4317156615118746861705.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   //horse
  //   {
  //     position: { lat: 55.171967, lng: 27.557047 },
  //     icon: {
  //       url:
  //         "https://www.pinclipart.com/picdir/big/46-467808_horses-silhouettes-transparent-horse-clipart.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   //мужик на телеге
  //   {
  //     position: { lat: 55.117853, lng: 27.558723 },
  //     icon: {
  //       url:
  //         "https://www.clipartmax.com/png/full/104-1040263_cart-driver-carriage-man-silhouette-cartoon-horse-drawn-carriage.png",
  //       scaledSize: new google.maps.Size(60, 40)
  //     }
  //   },
  //   //mountaint + forest
  //   {
  //     position: { lat: 55.146337, lng: 27.510561 },
  //     icon: {
  //       url: "https://cdn130.picsart.com/252244832003212.png?r1024x1024",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   //забыл что это :)
  //   {
  //     position: { lat: 55.123311, lng: 27.509763 },
  //     icon: {
  //       url:
  //         "https://seamenschurch.org/sites/default/files/image_upload/2-church-color.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   //  водяная мельница
  //   {
  //     position: { lat: 55.140419, lng: 27.584359 },
  //     icon: {
  //       url: "https://i.dlpng.com/static/png/1202891_thumb.png",
  //       scaledSize: new google.maps.Size(40, 40)
  //     }
  //   },
  //   // плавающий человек
  //   {
  //     position: { lat: 55.15893, lng: 27.671977 },
  //     icon: {
  //       url: "http://clipart-library.com/image_gallery/n1600113.png",
  //       scaledSize: new google.maps.Size(30, 25)
  //     }
  //   },
  //   // police
  //   {
  //     position: { lat: 55.189495, lng: 27.639463 },
  //     icon: {
  //       url:
  //         "http://www.stickpng.com/assets/images/580b585b2edbce24c47b2d23.png",
  //       scaledSize: new google.maps.Size(70, 40)
  //     }
  //   }
  // ];

  let markerNumber = data.markers.length;
  for (let i = 0; i < markerNumber; i++) {
    setMarker(
      data.markers[i],
      data.markersBestResult[i],
      data.markersBestTrip[i],
      i
    );
  }
  function setMarker(position, markerBest, markerBestTrip, index) {
    let url = "";
    if (index == data.markers.length - 1) {
      url =
        "http://icons.iconarchive.com/icons/icons8/ios7/512/Sports-Finish-Flag-icon.png";
    } else {
      url = "https://cdn.onlinewebfonts.com/svg/img_498180.png";
    }
    let iconProp = {
      position: position,
      icon: {
        url: url,
        scaledSize: new google.maps.Size(40, 40)
      }
    };
    let marker = new google.maps.Marker({
      position: iconProp.position,
      icon: iconProp.icon,
      optimized: false,
      map: map
    });
    let content = `
        <p>${markerBestTrip}</p>
        <p>${markerBest}</p>
    `;
    var infoWindow = new google.maps.InfoWindow({
      content: content
    });

    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  }

  var legend = document.getElementById("legend");
  var div = document.createElement("div");
  div.innerHTML = `<p>Best time: ${data.bestTime}`;
  legend.append(div);
  var div = document.createElement("div");
  div.innerHTML = `<p>Last time: ${data.lastTime}`;
  legend.append(div);
  var div = document.createElement("div");
  div.innerHTML = `<p>Total distance: ${data.distance}`;
  legend.append(div);

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

  let dataPoints = data.firstRoute.slice(1, data.firstRoute.length - 1);

  let points = data.firstRoute.slice(1, data.firstRoute.length - 1),
    start = data.firstRoute[0],
    end = data.firstRoute[data.firstRoute.length - 1];

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
  if (data.secondRoute.length > 1) {
    let start2 = data.secondRoute[0],
      end2 = data.secondRoute[data.secondRoute.length - 1];

    calculateAndDisplayRoute(
      directionsService2,
      directionsDisplay2,
      start2,
      end2
    );
  }

  var flightPlanCoordinates = data.polygon;

  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "blue",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
}
