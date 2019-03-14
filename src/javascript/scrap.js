$.getJSON('https://whateverorigin.herokuapp.com/get?url=' +
    encodeURIComponent('https://www.gismeteo.by/weather-minsk-4248/month/') + '&callback=?', function (data) {
        let weatherMaxData = $(data.contents).find('.temp_max.js_meas_container');
        let weatherMinData = $(data.contents).find('.temp_min.js_meas_container');
        let days = $(data.contents).find('.date');
        let weatherStatus = $(data.contents).find('.tooltip.cell');
        let daysNumbers = [], weatherMaxNumbers = [], weatherMinNumbers = [], weatherStat = [];
        $.each(weatherStatus, function (index, value) {
            weatherStat.push(value.dataset.text);
        });
        $.each(days, function (index, value) {
            let tmp = value.textContent.trim().slice(0, 2);
            daysNumbers.push(tmp);
        });
        $.each(weatherMinData, function (index, value) {
            weatherMinNumbers.push(value.dataset.value);
        });
        $.each(weatherMaxData, function (index, value) {
            weatherMaxNumbers.push(value.dataset.value);
        });
        let weatherIcon = [];

        for (let i = 0; i < weatherStat.length; i++) {
            let key = WEATHER_HELPER[weatherStat[i]];
            if (key === undefined) key = 'skip';

            weatherIcon.push(key);

        }
        class WeatherItem {
            constructor(min, max, status, day) {
                this.min = parseInt(min);
                this.max = parseInt(max);
                this.status = status;
                this.day = parseInt(day);
            }
        }

        let today = new Date();
        let today2 = today.getDate();
        let index = daysNumbers.indexOf(String(today2));

        let weatherObjs = [];
        for (let i = 0; i < weatherMinNumbers.length; i++) {
            let tmp = new WeatherItem(weatherMinNumbers[i], weatherMaxNumbers[i], weatherStat[i], daysNumbers[i]);
            if (tmp.status === undefined) continue;
            weatherObjs.push(tmp);
        }

        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let numberMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        let monthNumber = today.getMonth();

        let $th = $('tbody th');
        let savePoint = 0;

        for (let i = 0; i < $th.length; i++) {
            if (weatherObjs[0].day == $th[i].textContent) {
                savePoint = i;
                break;
            }
        }

        let curMonth = months[Number(monthNumber)];
        let nextMonth = months[Number(monthNumber) + 1]

        let calendarTitle = $('.calendar-nav h4').text();

        if (calendarTitle.includes(curMonth)) {
            for (let i = 0; i < weatherObjs.length; i++) {
                $($th[i + savePoint]).append("<p>" + weatherObjs[i].max + "</p>");
                $($th[i + savePoint]).append("<p>" + weatherObjs[i].min + "</p>");
                $($th[i + savePoint]).append("<i class=\"wi " + "wi-night-sleet" + "\"></i>");
            }
        }

    });