var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};

const TRIP_LABELS = ["Pussy trip", "Savage trip", "Try escape trip", "Train trip", "No road trip", "Speed hack trip"];
const MONTH_LIST = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const DATA_FOR_TIME_GRAPH = [
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor()
];
const DATA_FOR_DIFFICULTY_GRAPH = [
    randomScalingFactor() * 100,
    randomScalingFactor() * 100,
    randomScalingFactor() * 100,
    randomScalingFactor() * 100,
    randomScalingFactor() * 100,
    randomScalingFactor() * 100
];
const DATA_FOR_MILE_COUNT_GRAPH = [
    randomScalingFactor() * 30,
    randomScalingFactor() * 30,
    randomScalingFactor() * 30,
    randomScalingFactor() * 30,
    randomScalingFactor() * 30,
    randomScalingFactor() * 30
];
const DATA_FOR_SEASON_GRAPH = [
    randomScalingFactor() * 2 + 50,
    randomScalingFactor() * 2 + 50,
    randomScalingFactor() * 2 + 50,
    randomScalingFactor() * 2 + 50,
    randomScalingFactor() * 2 + 50,
    randomScalingFactor() * 2 + 50,
    randomScalingFactor() * 2 + 50,
    randomScalingFactor() * 2 + 50,
    randomScalingFactor() * 2 + 50,
    randomScalingFactor() * 2 + 50,
    randomScalingFactor() * 2 + 50,
    randomScalingFactor() * 2 + 50
];

const GREEN = 'rgb(183, 255, 181)';
const WHITE = 'rgb(255, 255, 255)';
const BLUE = 'rgb(136, 189, 243)';
const ORANGE = 'rgb(245, 207, 143)';
const NAVY_BLUE = 'rgb(66, 72, 235)';

const COLORS_FOR_TIME_GRAPH = [GREEN, GREEN, GREEN, GREEN, GREEN, GREEN];
const COLORS_FOR_DIFFICULTY_GRAPH = [BLUE, BLUE, BLUE, BLUE, BLUE, BLUE];
const COLORS_FOR_MILE_COUNT_GRAPH = [ORANGE, ORANGE, ORANGE, ORANGE, ORANGE, ORANGE];

const WEATHER_HELPER = {
    "Пасмурно, осадки": "wi-day-rain-wind",
    "Пасмурно": "wi-cloud",
    "Облачно, небольшой дождь": "wi-hail",
    "Облачно": "wi-cloudy",
    "Пасмурно, дождь": "wi-hail",
    "Переменная облачность, осадки": "wi-rain",
    "Облачно, осадки": "wi-hail",
    "Пасмурно, снег":"wi-snow",
    "Пасмурно, небольшой снег": "wi-snow",
    "Переменная облачность, небольшой дождь": "wi-rain",
    "Пасмурно, небольшой дождь": "wi-rain",
    "Переменная облачность, небольшой снег": "wi-snow",
    "Переменная облачность": "wi-cloudy",
    "Облачно, дождь": "wi-rain",
    "Малооблачно": "wi-cloud",
    "Ясно": "wi-day-sunny",
    "Малооблачно, небольшой дождь": "wi-rain",
    "Малооблачно, дождь": "wi-rain"
}

