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

        console.log(weatherIcon);
    });