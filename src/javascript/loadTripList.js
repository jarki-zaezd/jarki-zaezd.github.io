function appendTripList(data, $container) {
  for (let i = 0; i < data.length; i++) {
    $container.append(
      `
        <div class="trip-item" data-trip=${data[i].id}>
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

function clickRedirectionEvent($cardItem, currentPath) {
  console.log([...$cardItem]);
  $cardItem.click(function() {
    let path = $(this).data("trip");
    window.location.href = currentPath + "/" + path;
  });
}

let currentPath = window.location.pathname,
  typeInPath = currentPath.split("/")[2],
  tripType = { type: typeInPath };

$.ajax({
  url: "/getTripsForType",
  method: "POST",
  data: tripType,
  success: function(data) {
    let $tripListContainer = $(".row"),
      currentPath = window.location.pathname;

    appendTripList(data, $tripListContainer);

    let $cardItem = $(".trip-item");
    clickRedirectionEvent($cardItem, currentPath);
  },
  error: function(xhr, ajaxOptions, thrownError) {
    console.log(xhr.status);
    console.log(thrownError);
  }
});
