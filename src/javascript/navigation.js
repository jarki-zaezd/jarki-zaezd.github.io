const TIME_MOVE_MS = 800;
const NAVBAR_HEIGHT = $(".fixed-top").outerHeight()
  ? $(".fixed-top").outerHeight()
  : 0;

const ELEMENT_HREF = "#calendar";

$("#home a").click(function(ev) {
  //   let sectionID = $(this).attr("href"),
  //     sectionTop = $(sectionID).offset().top;

  let sectionTop = $(ELEMENT_HREF).offset().top;

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
