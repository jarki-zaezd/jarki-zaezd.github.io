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

function generateAriaLabels(labels, data) {
    let charterData = {};
    labels.forEach((label, index) => {
        charterData[label] = data[index];
    });

    let ariaLabelContent = '';
    for (const key in charterData) {
        ariaLabelContent += `${key}: ${charterData[key]}, `
    }
    ariaLabelContent = ariaLabelContent.substr(0, ariaLabelContent.length - 2);
    return ariaLabelContent;
}

const timeCharter= document.getElementById('time');
const difficultyCharter= document.getElementById('trip-difficulty');
const mileCountCharter= document.getElementById('trip-all-way');
const seasonCharter= document.getElementById('trip-activity');

const timeStat = generateAriaLabels(TRIP_LABELS, DATA_FOR_TIME_GRAPH);
const difficultyStat = generateAriaLabels(TRIP_LABELS, DATA_FOR_DIFFICULTY_GRAPH);
const mileStat = generateAriaLabels(TRIP_LABELS, DATA_FOR_MILE_COUNT_GRAPH);
const activityStat = generateAriaLabels(MONTH_LIST, DATA_FOR_SEASON_GRAPH);

timeCharter.setAttribute("aria-label", "Hours spent in trip from 0 to 120: " + timeStat);
difficultyCharter.setAttribute("aria-label", "How many times from 0 to 12000: " + difficultyStat);
mileCountCharter.setAttribute("aria-label", "How many miles from 0 to 3500: " + mileStat);
seasonCharter.setAttribute("aria-label", "Seosonal activity from 0 to 280: " + activityStat);