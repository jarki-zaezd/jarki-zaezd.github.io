const TIME_MOVE_MS = 800;
const NAVBAR_HEIGHT = $(".fixed-top").outerHeight() ? $(".fixed-top").outerHeight() : 0;

$("#home a").click(function(ev) {
  let sectionID = $(this).attr("href"),
    sectionTop = $(sectionID).offset().top;

  $("html, body")
    .stop()
    .animate(
      { scrollTop: sectionTop - NAVBAR_HEIGHT },
      TIME_MOVE_MS,
      function() {
        console.log("success");
      }
    );
});
