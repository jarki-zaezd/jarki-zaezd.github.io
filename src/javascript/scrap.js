$.getJSON('https://whateverorigin.herokuapp.com/get?url=' +
    encodeURIComponent('https://www.gismeteo.by/weather-minsk-4248/month/') + '&callback=?', function (data) {
        let $allPageData = $(data.contents),
            $maxTemperatureContainers = $allPageData.find('.temp_max.js_meas_container'),
            $minTemperatureContainers = $allPageData.find('.temp_min.js_meas_container'),
            $monthDaysContainers = $allPageData.find('.date'),
            $weatherStatusContainers = $(data.contents).find('.tooltip.cell'),
            $thList = $('tbody th');

        let monthDays = [...$monthDaysContainers].map(elem => elem.textContent.trim().slice(0, 2)),
            maxTemperature = [...$maxTemperatureContainers].map(elem => elem.dataset.value),
            minTemperature = [...$minTemperatureContainers].map(elem => elem.dataset.value),
            weatherStatus = [...$weatherStatusContainers].map(elem => elem.dataset.text);

        let fullCurrentDate = new Date(),
            monthNumber = fullCurrentDate.getMonth(),
            len = minTemperature.length,
            weatherObjectsContainer = [],
            startFillPosition = 0;

        for (let i = 0; i < len; i++) {
            let tmp = new WeatherItem(minTemperature[i], maxTemperature[i], weatherStatus[i], monthDays[i]);
            if (tmp.status === undefined) continue;
            weatherObjectsContainer.push(tmp);
        }

        for (let i = 0; i < $thList.length; i++) {
            let startFillDay = weatherObjectsContainer[0].day;
            if (startFillDay == $thList[i].textContent) {
                startFillPosition = i;
                break;
            }
        }

        let curMonth = MONTH_LIST[Number(monthNumber)],
            nextMonth = MONTH_LIST[Number(monthNumber) + 1],
            calendarTitle = $('.calendar-nav h4').text();

        if (calendarTitle.includes(curMonth)) {
            for (let i = 0; i < weatherObjectsContainer.length; i++) {
                $($thList[i + startFillPosition]).append("<p style = 'font-size: 26px'>" + weatherObjectsContainer[i].max + "</p>");
                $($thList[i + startFillPosition]).append("<p>min: " + weatherObjectsContainer[i].min + "</p>");
                $($thList[i + startFillPosition]).append("<i class=\"wi " + WEATHER_HELPER[weatherObjectsContainer[i].status] + "\" style = 'font-size: 26px'></i>");
            }
        }

    });