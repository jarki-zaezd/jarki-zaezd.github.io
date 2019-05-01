class Table {
  setTitleToTableNav() {
    let month = document.querySelector(".cur-month").textContent,
      year = document.querySelector(".numInputWrapper input").value,
      calendarNav = document.querySelector(".calendar-nav h4");

    calendarNav.textContent = month + year;
  }

  setPrevAndNextMonthToTableNav() {
    let month = MONTH_LIST;
    let dateInfo = document.querySelector(".calendar-nav h4").textContent,
      currentMonth = dateInfo.substr(0, dateInfo.indexOf(" ")),
      numberMonth = month.indexOf(currentMonth),
      year = dateInfo.slice(dateInfo.indexOf(" ")),
      prev,
      next,
      prevElem = document.querySelector(".calendar-nav .prev"),
      nextElem = document.querySelector(".calendar-nav .next"),
      prevIcon = '<i class="fa fa-chevron-left"></i>',
      nextIcon = '<i class="fa fa-chevron-right"></i>';

    if (numberMonth === 0) {
      prev = month[11];
      next = month[1];
      nextElem.innerHTML = next + " " + year + nextIcon;
      prevElem.innerHTML = prevIcon + prev + " " + --year;
    } else if (numberMonth === 11) {
      prev = month[10];
      next = month[0];
      prevElem.innerHTML = prevIcon + prev + " " + year;
      nextElem.innerHTML = next + " " + ++year + nextIcon;
    } else {
      prev = month[numberMonth - 1];
      next = month[numberMonth + 1];
      prevElem.innerHTML = prevIcon + prev + " " + year;
      nextElem.innerHTML = next + " " + year + nextIcon;
    }
  }

  getDays() {
    let days = Array.from(document.querySelectorAll(".dayContainer span"));
    let daysCurrentMonth = [],
      daysPrevMonth = [],
      daysNextMonth = [];
    days.forEach(elem => {
      if (elem.className.includes("flatpickr-day prevMonthDay"))
        daysPrevMonth.push(elem.textContent);
      else if (elem.className.includes("flatpickr-day nextMonthDay"))
        daysNextMonth.push(elem.textContent);
      else daysCurrentMonth.push(elem.textContent);
    });

    let $thList = [];
    for (let i = 0; i < daysPrevMonth.length; i++) {
      $thList.push(
        "<th style='background: #edeff1;'> <div class='date'>" +
          daysPrevMonth[i] +
          "</div></th>"
      );
    }
    for (let i = 0; i < daysCurrentMonth.length; i++) {
      $thList.push(
        "<th> <div class='date'>" + daysCurrentMonth[i] + "</div></th>"
      );
    }
    for (let i = 0; i < daysNextMonth.length; i++) {
      $thList.push(
        "<th style='background: #edeff1;'> <div class='date'>" +
          daysNextMonth[i] +
          "</div></th>"
      );
    }
    return $thList;
  }

  updateCalendar() {
    this.setTitleToTableNav();
    this.setPrevAndNextMonthToTableNav();
    let $tblBody = $("<tbody></tbody>"),
      $tr;
    let $thList = this.getDays();
    for (let i = 0; i < $thList.length; i++) {
      if ($tr === undefined || $tr.children().length === 7)
        $tr = $("<tr/>").appendTo($tblBody);
      $tr.append($thList[i]);
    }
    $("table").append($tblBody);
  }
}
let evLen = 0;
let events = [];
function setCalendarUserEvents() {
  $.ajax({
    url: "http://localhost:9000/setCalendar",
    method: "POST",
    success: function(data) {
      events = [...data];
      evLen = events.length;
      changeCalendar(events);
      addEvent2();
    },
    error: function(xhr, ajaxOptions, thrownError) {
      console.log(xhr.status);
      console.log(thrownError);
    }
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
          $(htmlEl).append(`<div class='event'><p>${element.trip_name}<p></div>`);
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

setCalendarUserEvents();

let tbl = new Table();
let calendarConfig = {
  inline: true,
  onChange: function() {
    $("tbody").remove();
    //отправить в очередь, что бы сначало
    //проинициализировалась таблциа, а после о,новилась статистика
    setTimeout(tbl.updateCalendar(), 0);
  }
};

flatpickr(".mini-calendar", calendarConfig);
tbl.updateCalendar();

$(".prev").click(changeDate);

$(".next").click(changeDate);

function changeDate(e) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let numberMonths = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ];

  let tempMonth = this.textContent.substr(0, this.textContent.indexOf(" ")),
    tempYear = this.textContent.slice(this.textContent.indexOf(" ") + 1);

  let numberMonth = numberMonths[months.indexOf(tempMonth)];
  let day = "01";

  let date = [tempYear, numberMonth, day].join("-");

  let calendarConfg = {
    inline: true,
    defaultDate: date,
    onChange: function() {
      $("tbody").remove();
      setTimeout(tbl.updateCalendar(), 0);
    }
  };

  flatpickr(".mini-calendar", calendarConfg);
  $("tbody").remove();
  console.log(tbl);
  tbl.updateCalendar();

  changeCalendar(events);
  addEvent2();
  
  e.preventDefault();
}

let globalTh = null;
function addEvent2() {
  $(".event").click(function(event) {
    console.log(1);
    $(this).append(`<div class="desc">aa</div>`);
    $( this ).off( event );
  });
}

function addEvent() {
  $("tbody th").click(function(event) {
    // console.log(1);
    if (event.target.className == "event" || event.target.tagName == "P") {
      return;
    }
    globalTh = $(this);
    $(".choose-trip").css("visibility", "visible");

    $(".choose-trip").removeClass("animated delay-0.1s fadeOut");

    $(".choose-trip").addClass("animated delay-0.1s fadeInUp");

    $("body").append('<div class="overplay"></div>');
  });
}

function tableObserver(callback) {
  console.log(23);
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

$("#calendar .calendar .btn").click(function(e) {
  $(".choose-trip").css("visibility", "visible");

  $(".choose-trip").removeClass("animated delay-0.1s fadeOut");

  $(".choose-trip").addClass("animated delay-0.1s fadeInUp");

  $("body").append('<div class="overplay"></div>');

  e.preventDefault();
});

$(".slide").click(function(e) {
  if (this.firstElementChild.classList.contains("nohover")) {
    $(this.firstElementChild).removeClass("nohover");
    $(this).removeClass("selected-trip");
  } else {
    $(this.firstElementChild).addClass("nohover");
    $(this).addClass("selected-trip");
  }
});

$(".submit").click(function(e) {
  e.preventDefault();
  if ($(".selected-trip").length === 0 || globalTh === null) return;

  $(".choose-trip").removeClass("animated delay-0.1s fadeInUp");

  $(".choose-trip").addClass("animated delay-0.1s fadeOut");
  $(".overplay").css("opacity", 0);

  setTimeout(function() {
    $(".choose-trip").css("visibility", "hidden");
    $(".overplay").remove();
  }, 1000);

  console.log(
    $(".choose-trip")
      .find(".nohover")
      .parent()[0]
  );
  globalTh.css("background", "red");

  addNewEventCalendar();
});

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

  console.log(ev);
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

tableObserver(addEvent);
// tableObserver(addEvent2);

let closeIcon = document.querySelector("#calendar .choose-trip i");

closeIcon.addEventListener("click", function(e) {
  $(".choose-trip").removeClass("animated delay-0.1s fadeInUp");

  $(".choose-trip").addClass("animated delay-0.1s fadeOut");
  $(".overplay").css("opacity", 0);

  setTimeout(function() {
    $(".choose-trip").css("visibility", "hidden");
    $(".overplay").remove();
  }, 1000);
});

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

let itemCard = document.querySelector("#trips .card");

// itemCard.addEventListener("click", function() {
//   window.location.href = "trips.html";
// });
