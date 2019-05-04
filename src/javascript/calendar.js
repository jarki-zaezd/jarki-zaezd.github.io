let evLen = 0;
let events = [];
let globalTh = null;
let closeIcon = document.querySelector("#calendar .choose-trip i");

let calendarConfig = {
  inline: true,
  onChange: function() {
    $("tbody").remove();
    setTimeout(updateCalendar, 0);
  }
};

const FLATPICR_CONTAINER = ".mini-calendar";
flatpickr(FLATPICR_CONTAINER, calendarConfig);

updateCalendar();
setCalendarUserEvents();

$(".prev").click(changeDate);
$(".next").click(changeDate);

tableObserver(addEvent);
addEvent();
addEvent2();

/**
 * update calendar when user choose new month
 * @param {Event} e
 */
function changeDate(e) {
  let thisTextContent = $(this).text(),
    tempMonth = thisTextContent.substr(0, thisTextContent.indexOf(" ")),
    tempYear = thisTextContent.slice(thisTextContent.indexOf(" ") + 1);

  let numberMonth = NUMBER_MONTH[MONTH_LIST.indexOf(tempMonth)];
  let day = "01";

  let date = [tempYear, numberMonth, day].join("-");

  let calendarConfg = {
    inline: true,
    defaultDate: date,
    onChange: function() {
      $("tbody").remove();
      setTimeout(updateCalendar, 0);
    }
  };

  flatpickr(FLATPICR_CONTAINER, calendarConfg);

  $("tbody").remove();
  updateCalendar();

  changeCalendar(events);
  setOverflowEvents();
  addEvent2();

  e.preventDefault();
}

/**
 * Dinamicly set month and year to header of calendar
 * from flatpickr calendar library
 */
function setTitleToTableNav() {
  let month = $(".cur-month").text(),
    year = $(".numInputWrapper input").val(),
    $calendarNav = $(".calendar-nav h4");

  $calendarNav.text(month + year);
}

/**
 * Dinamicaly set arrow with text to navigate to another
 * month of calendar
 */
function setPrevAndNextMonthToTableNav() {
  let monthAndYear = $(".calendar-nav h4").text(),
    $prevElem = $(".calendar-nav .prev"),
    $nextElem = $(".calendar-nav .next"),
    month = monthAndYear.split(" ")[0],
    year = monthAndYear.split(" ")[1],
    numberMonth = MONTH_LIST.indexOf(month),
    prevIcon = '<i class="fa fa-chevron-left"></i>',
    nextIcon = '<i class="fa fa-chevron-right"></i>',
    prev,
    next;

  if (numberMonth === 0) {
    prev = MONTH_LIST[11];
    next = MONTH_LIST[1];
    $nextElem.html(next + " " + year + nextIcon);
    $prevElem.html(prevIcon + prev + " " + --year);
  } else if (numberMonth === 11) {
    prev = MONTH_LIST[10];
    next = MONTH_LIST[0];
    $prevElem.html(prevIcon + prev + " " + year);
    $nextElem.html(next + " " + ++year + nextIcon);
  } else {
    prev = MONTH_LIST[numberMonth - 1];
    next = MONTH_LIST[numberMonth + 1];
    $prevElem.html(prevIcon + prev + " " + year);
    $nextElem.html(next + " " + year + nextIcon);
  }
}

/**
 * Dinamicaly get number of days current month
 * from flatpicr calendar library
 */
function getDays() {
  let daysContainer = $(".dayContainer span"),
    days = [...daysContainer];

  let daysCurrentMonth = [],
    daysPrevMonth = [],
    daysNextMonth = [];

  days.forEach(day => {
    let dayText = day.textContent;
    if (day.className.includes("flatpickr-day prevMonthDay"))
      daysPrevMonth.push(dayText);
    else if (day.className.includes("flatpickr-day nextMonthDay"))
      daysNextMonth.push(dayText);
    else daysCurrentMonth.push(dayText);
  });

  let $thList = [];
  for (let i = 0; i < daysPrevMonth.length; i++) {
    $thList.push(
      "<th style='background: #edeff1; class='prev-month''> <div class='date'>" +
        daysPrevMonth[i] +
        "</div></th>"
    );
  }
  for (let i = 0; i < daysCurrentMonth.length; i++) {
    $thList.push(
      "<th class='current-month'> <div class='date'>" +
        daysCurrentMonth[i] +
        "</div></th>"
    );
  }
  for (let i = 0; i < daysNextMonth.length; i++) {
    $thList.push(
      "<th style='background: #edeff1;' class='next-month'> <div class='date'>" +
        daysNextMonth[i] +
        "</div></th>"
    );
  }
  return $thList;
}

/**
 * Set to calendar all new info
 */
function updateCalendar() {
  setTitleToTableNav();
  setPrevAndNextMonthToTableNav();

  let $tblBody = $("<tbody></tbody>"),
    $tr;

  let $thList = getDays();
  for (let i = 0; i < $thList.length; i++) {
    if ($tr === undefined || $tr.children().length === 7)
      $tr = $("<tr/>").appendTo($tblBody);
    $tr.append($thList[i]);
  }
  $("table").append($tblBody);
}

/**
 * Set to calendar all event to be planned
 */
function setCalendarUserEvents() {
  $.ajax({
    url: "/setCalendar",
    method: "POST",
    success: function(data) {
      events = [...data];
      evLen = events.length;
      changeCalendar(events);
      setOverflowEvents();

      addEvent2();
    },
    error: function(xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
    }
  });
}

/**
 * add style to th when try set new item by click on calendar
 */
function addEvent() {
  $("tbody th").click(function(event) {
    if (
      event.target.className == "event" ||
      event.target.tagName == "P" ||
      event.target.className == "more"
    ) {
      return;
    }
    globalTh = $(this);
    $(".choose-trip").css("visibility", "visible");

    $(".choose-trip").removeClass("animated delay-0.1s fadeOut");

    $(".choose-trip").addClass("animated delay-0.1s fadeInUp");

    $("body").append('<div class="overplay"></div>');
  });
}

function changeCalendar(events) {
  let year = $(".calendar-nav h4")
    .text()
    .split(" ")[1];
  let month = $(".calendar-nav h4")
    .text()
    .split(" ")[0];

  let thList = [...$("tbody th")];
  let Con = thList.filter(elem => {
    return elem.style.backgroundColor !== "rgb(237, 239, 241)";
  });

  events.forEach(element => {
    if (element.year == year && element.month == month) {
      Con.forEach(htmlEl => {
        if (Number(element.day) == parseInt(htmlEl.textContent)) {
          $(htmlEl).append(
            `<div class='event'><p>${element.trip_name}<p></div>`
          );
        }
      });
    }
  });

  // Con.forEach(htmlEl => {
  //   if ($(htmlEl).find(".event").length > 3) {
  //     $(htmlEl).append(`<div class='event'>${element.trip_name}</div>`);
  //   }
  // });
}

function addEvent2() {
  $(".more").click(function(event) {
    console.log("click on more class");
    let $target = $(this).parent();

    let position = $target.position();
    $target.css("position", "absolute");
    $target.css("width", "14%");
    $target.css("height", "23%");

    $target.css("z-index", 999);
    $target.css("background", "white");
    $target.css(
      "box-shadow",
      "0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149)"
    );

    $target.css("border-radius", "10px")
    $target.css("left", position.left - 24);
    $target.css("top", position.top - 40);
  });
}

function tableObserver(callback) {
  let target = document.querySelector("table");
  const mutationConfig = {
    childList: true,
    subtree: true
  };

  const observer = new MutationObserver(callback);

  observer.observe(target, mutationConfig);
}

$(".select-item").click(function(e) {
  $.each($(".select-item"), function(indexInArray, valueOfElement) {
    if ($(this).hasClass("red-color")) $(this).removeClass("red-color");
  });
  $(this).addClass("red-color");
  e.preventDefault();
});

/**
  Logic to user trip selection
 */
$(".slide").click(function(e) {
  // add logic to trip selection
  if (this.firstElementChild.classList.contains("nohover")) {
    $(this.firstElementChild).removeClass("nohover");
    $(this).removeClass("selected-trip");
  } else {
    $(this.firstElementChild).addClass("nohover");
    $(this).addClass("selected-trip");
  }

  // sure that selected only one element
  let $this = this;
  $.each($(".slide"), function(index, elem) {
    if ($this != elem) {
      $(elem).removeClass("selected-trip");
      $(elem.firstElementChild).removeClass("nohover");
    }
  });
});

$(".submit").click(function(e) {
  e.preventDefault();
  if ($(".selected-trip").length === 0 || globalTh === null) return;

  // let tripName = $(".selected-trip").data("name");

  // hide overplay window
  $(".choose-trip").removeClass("animated delay-0.1s fadeInUp");

  $(".choose-trip").addClass("animated delay-0.1s fadeOut");
  $(".overplay").css("opacity", 0);

  setTimeout(function() {
    $(".choose-trip").css("visibility", "hidden");
    $(".overplay").remove();
  }, 1000);

  // set event on page after creation immediately
  addNewEventCalendar();
});

/**
 * Adding new item to database and display on calendar
 */
function addNewEventCalendar() {
  let year = $(".calendar-nav h4")
    .text()
    .split(" ")[1];
  let month = $(".calendar-nav h4")
    .text()
    .split(" ")[0];

  let day = parseInt(globalTh.text().trim());
  let tripName = $(".selected-trip").data("name");

  //remove selected trip class
  $(".selected-trip").removeClass("selected-trip");
  evLen++;
  let ev = {
    id: evLen,
    name: "Custom name",
    day: day,
    month: month,
    year: year,
    trip_name: tripName
  };
  events.push(ev);

  $(globalTh).append(`<div class='event'><p>${tripName}<p></div>`);
  setOverflowEvents();
  addEvent2();

  $.ajax({
    url: "http://localhost:9000/createEvent",
    method: "POST",
    data: ev,
    success: function() {
      console.log("product created successful");
    },
    error: function(xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
    }
  });
}

/**
 * Close select-trip container with mouse
 */
closeIcon.addEventListener("click", function(e) {
  $(".choose-trip").removeClass("animated delay-0.1s fadeInUp");

  $(".choose-trip").addClass("animated delay-0.1s fadeOut");
  $(".overplay").css("opacity", 0);

  setTimeout(function() {
    $(".choose-trip").css("visibility", "hidden");
    $(".overplay").remove();
  }, 1000);
});

/**
 * Close select-trip container with keyboard
 */
document.addEventListener("keydown", function(e) {
  if (e.which !== 27) return;

  let state = $(".choose-trip").css("visibility");

  if (state === "visible") {
    $(".choose-trip").removeClass("animated delay-0.1s fadeInUp");

    $(".choose-trip").addClass("animated delay-0.1s fadeOut");
    $(".overplay").css("opacity", 0);

    setTimeout(function() {
      $(".choose-trip").css("visibility", "hidden");
      $(".overplay").remove();
    }, 1000);
  }
});

/**
 *
 */
function setOverflowEvents() {
  let thList = Array.from($("table tbody th.current-month"));
  let tripList = [];
  for (let j = 0; j < thList.length; j++) {
    let temp = Array.from(thList[j].childNodes);
    tripList.push([]);

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].nodeName != "#text") {
        if (temp[i].className.includes("event")) tripList[j].push(temp[i]);
      }
    }
  }

  for (let i = 0; i < tripList.length; i++) {
    if (tripList[i].length >= 4) {
      let elementToHide = tripList[i].length - 3;
      for (let j = 0; j < elementToHide; j++) {
        let len = elementToHide;
        $(tripList[i][len - 1 - j]).css("display", "none");
      }

      let removeEx = $(thList[i]).children();
      for (let i = 0; i < removeEx.length; i++) {
        if (removeEx[i].className.includes("more")) {
          $(removeEx[i]).remove();
        }
      }

      $(thList[i]).append(
        `<div class='more'><p>${elementToHide} more<p></div>`
      );
    }
  }
}
