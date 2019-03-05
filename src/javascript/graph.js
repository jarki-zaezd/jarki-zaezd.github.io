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

let ctxForTimeCharter = document.getElementById('time').getContext('2d');
var timeGraph = new Chart(ctxForTimeCharter, {
    type: 'bar',
    data: {
        datasets: [{
            label: "Hours spent in trips",
            data: DATA_FOR_TIME_GRAPH,
            backgroundColor: COLORS_FOR_TIME_GRAPH
        }],
        labels: TRIP_LABELS
    },
    options: {
        responsive: true,
        legend: {
            labels: {
                fontColor: WHITE
            }
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    color: WHITE
                },
                ticks: {
                    min: 0,
                    max: 120,
                    stepSize: 20,
                    fontColor: WHITE,
                    callback: function (label) {
                        return label + ' hours';
                    }
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    color: WHITE
                },
                ticks: {
                    fontColor: WHITE
                }
            }]
        }
    }
});

let ctxForDifficultyCharter = document.getElementById('trip-difficulty').getContext('2d');
var difficultyGraph = new Chart(ctxForDifficultyCharter, {
    type: 'bar',
    data: {
        datasets: [{
            label: "How many times did",
            data: DATA_FOR_DIFFICULTY_GRAPH,
            backgroundColor: COLORS_FOR_DIFFICULTY_GRAPH
        }],
        labels: TRIP_LABELS
    },

    options: {
        responsive: true,
        legend: {
            labels: {
                fontColor: WHITE
            }
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    color: WHITE
                },
                ticks: {
                    min: 0,
                    max: 12000,
                    stepSize: 2000,
                    fontColor: WHITE
                }
            }],
            xAxes: [{
                display: true,
                gridLines: {
                    display: false,
                    color: WHITE
                },
                ticks: {
                    fontColor: WHITE
                }
            }]
        }
    }
});

let ctxForMileCountCharter = document.getElementById('trip-all-way').getContext('2d');
var mileCountGraph = new Chart(ctxForMileCountCharter, {
    type: 'bar',
    data: {
        datasets: [{
            label: "How many miles",
            data: DATA_FOR_MILE_COUNT_GRAPH,
            backgroundColor: COLORS_FOR_MILE_COUNT_GRAPH
        }],
        labels: TRIP_LABELS
    },

    options: {
        responsive: true,
        legend: {
            labels: {
                fontColor: WHITE
            }
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    color: WHITE
                },
                ticks: {
                    min: 0,
                    max: 3500,
                    stepSize: 700,
                    fontColor: WHITE,
                    callback: function (label) {
                        return label + ' mile';
                    }
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    color: WHITE
                },
                ticks: {

                    fontColor: WHITE
                }
            }]
        }
    }
});

let ctxForSeasonCharter = document.getElementById('trip-activity').getContext('2d');
var seasonGraph = new Chart(ctxForSeasonCharter, {
    type: 'line',
    data: {
        labels: MONTH_LIST,
        datasets: [{
            label: "Seasonal activities",
            backgroundColor: NAVY_BLUE,
            borderColor: NAVY_BLUE,
            data: DATA_FOR_SEASON_GRAPH,
            fill: false
        }],
    },

    options: {
        responsive: true,
        legend: {
            labels: {
                fontColor: WHITE
            }
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    color: WHITE
                },
                ticks: {
                    min: 0,
                    max: 280,
                    stepSize: 70,
                    fontColor: WHITE
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    color: WHITE
                },
                ticks: {
                    fontColor: WHITE
                }
            }]
        }
    }
});

