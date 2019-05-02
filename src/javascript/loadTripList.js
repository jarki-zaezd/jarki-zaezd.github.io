function appendTripList(data, $container) {
  for (let i = 0; i < data.length; i++) {
    $container.append(
      `
        <div class="trip-item">
            <img src="${data[i].picture}" alt="" srcset="">
            <div class="info-container">
                <header>
                    <h4>MAECENAS SAPIEN FEUGIAT EX PURUS</h4>
                    <h3>Lorem ipsum dolor</h3>
                </header>
                <p class="trip-desription">
                    Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet
                    tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus,
                    quis
                    volutpat lacus placerat malesuada.
                </p>
                <button class="btn btn-danger learn-more">Learn more</button>
            </div>
        </div>
        `
    );
  }
}

let currentPath = window.location.pathname,
  typeInPath = currentPath.split("/")[2],
  tripType = { type: typeInPath };

$.ajax({
  url: "/getTripsForType",
  method: "POST",
  data: tripType,
  success: function(data) {
    console.log(data);
    let $tripListContainer = $(".row");
    appendTripList(data, $tripListContainer);
  },
  error: function(xhr, ajaxOptions, thrownError) {
    console.log(xhr.status);
    console.log(thrownError);
  }
});