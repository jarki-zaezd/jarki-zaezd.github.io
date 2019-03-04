let calendarConfig = {
    inline: true,
    onChange: function () {
        $('tbody').remove();
        //отправить в очередь, что бы сначало 
        //проинициализировалась таблциа, а после о,новилась статистика
        setTimeout(updateCalendar, 0)
    }

}

flatpickr(".mini-calendar", calendarConfig);



function getDays() {
    let days = Array.from(document.querySelectorAll('.dayContainer span'));
    let daysCurrentMonth = [], daysPrevMonth = [], daysNextMonth = [];
    days.forEach(elem => {
        if (elem.className.includes('flatpickr-day prevMonthDay')) daysPrevMonth.push(elem.textContent);
        else if (elem.className.includes('flatpickr-day nextMonthDay')) daysNextMonth.push(elem.textContent);
        else daysCurrentMonth.push(elem.textContent);
    });

    let $thList = [];
    for (let i = 0; i < daysPrevMonth.length; i++) {
        $thList.push("<th style='background: #edeff1;'> <div class='date'>" + daysPrevMonth[i] + "</div></th>");
    }
    for (let i = 0; i < daysCurrentMonth.length; i++) {
        $thList.push("<th> <div class='date'>" + daysCurrentMonth[i] + "</div></th>");
    }
    for (let i = 0; i < daysNextMonth.length; i++) {
        $thList.push("<th style='background: #edeff1;'> <div class='date'>" + daysNextMonth[i] + "</div></th>");
    }
    return $thList;
}

function setTitleToTableNav() {
    let month = document.querySelector('.cur-month').textContent,
        year = document.querySelector('.numInputWrapper input').value,
        calendarNav = document.querySelector('.calendar-nav h4');

    calendarNav.textContent = month + year;
}

function setPrevAndNextMonthToTableNav() {
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let dateInfo = document.querySelector('.calendar-nav h4').textContent,
        currentMonth = dateInfo.substr(0, dateInfo.indexOf(' ')),
        numberMonth = month.indexOf(currentMonth),
        year = dateInfo.slice(dateInfo.indexOf(' ')),
        prev, next,
        prevElem = document.querySelector('.calendar-nav .prev'),
        nextElem = document.querySelector('.calendar-nav .next'),
        prevIcon = '<i class="fa fa-chevron-left"></i>',
        nextIcon = '<i class="fa fa-chevron-right"></i>';

    if (numberMonth === 0) {
        prev = month[11];
        next = month[1];
        nextElem.innerHTML = next + ' ' + year + nextIcon;
        prevElem.innerHTML = prevIcon + prev + ' ' + --year;
    }
    else if (numberMonth === 11) {
        prev = month[10];
        next = month[0];
        prevElem.innerHTML = prevIcon + prev + ' ' + year;
        nextElem.innerHTML = next + ' ' + ++year + nextIcon;
    }
    else {
        prev = month[numberMonth - 1];
        next = month[numberMonth + 1];
        prevElem.innerHTML = prevIcon + prev + ' ' + year;
        nextElem.innerHTML = next + ' ' + year + nextIcon;
    }
}


function updateCalendar() {

    setTitleToTableNav();
    setPrevAndNextMonthToTableNav();
    let $tblBody = $("<tbody></tbody>"), $tr;
    $thList = getDays();
    for (let i = 0; i < $thList.length; i++) {
        if ($tr === undefined || $tr.children().length === 7) $tr = $("<tr/>").appendTo($tblBody);
        $tr.append($thList[i]);
    }
    $('table').append($tblBody);
}

updateCalendar();


$('.prev').click(changeDate);

$('.next').click(changeDate);

function changeDate(e) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let numberMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    let tempMonth = this.textContent.substr(0, this.textContent.indexOf(' ')),
        tempYear = this.textContent.slice(this.textContent.indexOf(' ') + 1);

    let numberMonth = numberMonths[months.indexOf(tempMonth)];
    let day = '01';

    let date = [tempYear, numberMonth, day].join('-');

    let calendarConfg = {
        inline: true,
        defaultDate: date,
        onChange: function () {
            $('tbody').remove();
            setTimeout(updateCalendar, 0)
        }
    }

    flatpickr(".mini-calendar", calendarConfg);
    $('tbody').remove();
    updateCalendar();
    e.preventDefault();
}

function addEvent() {
    $('tbody th').click(function () {
        $('.choose-trip').css('visibility', 'visible');

        $('.choose-trip').addClass('animated delay-0.1s fadeInUp');

        $('body').append('<div class="overplay"></div>');
    });
}

function tableObserver() {
    let target = document.querySelector("table");
    console.log(target);
    const mutationConfig = {
        childList: true,
        subtree: true
    }

    const observer = new MutationObserver(addEvent);

    observer.observe(target, mutationConfig);
}

$('.select-item').click(function (e) {
    $.each($('.select-item'), function (indexInArray, valueOfElement) {
        if ($(this).hasClass('red-color')) $(this).removeClass('red-color');
    });
    $(this).addClass('red-color');
    e.preventDefault();
});



addEvent();
tableObserver();


let ctx = document.getElementById('time').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            label: "My First dataset",
            
            data: [10, 5, 2, 20, 30, 45],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ]
        }]
    },

    // Configuration options go here
    options: {
        responsive: true
    }
});

let ctx2 = document.getElementById('trip-difficulty').getContext('2d');
var myPieChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        datasets: [{
            label: "My First dataset",
            
            data: [10, 5, 2, 20, 30, 45],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ]
        }]
    },

    // Configuration options go here
    options: {
        responsive: true
    }
});

let ctx3 = document.getElementById('trip-all-way').getContext('2d');
var myPieChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        datasets: [{
            label: "My First dataset",
            
            data: [10, 5, 2, 20, 30, 45],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ]
        }]
    },

    // Configuration options go here
    options: {
        responsive: true
    }
});

let ctx4 = document.getElementById('trip-activity').getContext('2d');
var myPieChart4 = new Chart(ctx4, {
    type: 'pie',
    data: {
        datasets: [{
            label: "My First dataset",
            
            data: [10, 5, 2, 20, 30, 45],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ]
        }]
    },

    // Configuration options go here
    options: {
        responsive: true
    }
});

