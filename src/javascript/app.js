let calendarConfig = {
    inline: true,
    onMonthChange: function () {
        $('tbody').remove();
        //отправить в очередь, что бы сначало 
        //проинициализировалась таблциа, а после о,новилась статистика
        setTimeout(createTable, 0)
    }
}

flatpickr(".mini-calendar", calendarConfig);



function getDays() {
    let days = Array.from(document.querySelectorAll('.dayContainer span'));
    let daysCurrentMonth = [], daysPrevMonth = [], daysNextMonth = [];
    days.forEach(elem => {
        if (elem.className === 'flatpickr-day prevMonthDay') daysPrevMonth.push(elem.textContent);
        else if (elem.className === 'flatpickr-day nextMonthDay') daysNextMonth.push(elem.textContent);
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

function createTable() {
    let $tblBody = $("<tbody></tbody>"), $tr;
    $thList = getDays();
    for (let i = 0; i < $thList.length; i++) {
        if ($tr === undefined || $tr.children().length === 7) $tr = $("<tr/>").appendTo($tblBody);
        $tr.append($thList[i]);
    }
    $('table').append($tblBody);

}

createTable();

