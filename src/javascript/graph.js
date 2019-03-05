var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};


let ctx = document.getElementById('time').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: "Time spend",
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: [
                'rgb(183, 255, 181)',
                'rgb(183, 255, 181)',
                'rgb(183, 255, 181)',
                'rgb(183, 255, 181)',
                'rgb(183, 255, 181)',
                'rgb(183, 255, 181)'
            ]
        }],
        labels: [
            "Pussy trip",
            "Savage trip",
            "Try escape trip",
            "Train trip",
            "No road trip",
            "Speed hack trip"
        ]
    },

    options: {
        responsive: true,
        legend: {
            labels: {
                fontColor: 'rgb(255, 255, 255)'
            }
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#FFFFFF"
                },
                ticks: {
                    min: 0,
                    stepSize: 20,
                    fontColor: "white",
                    callback: function (label, index, labels) {
                        return label + ' hours';
                    }
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    color: "#FFFFFF"
                },
                ticks: {
                    fontColor: "white"
                }
            }]
        }
    }
});

let ctx2 = document.getElementById('trip-difficulty').getContext('2d');
var myPieChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        datasets: [{
            label: "Difficulty",
            data: [
                randomScalingFactor() * 100,
                randomScalingFactor() * 100,
                randomScalingFactor() * 100,
                randomScalingFactor() * 100,
                randomScalingFactor() * 100,
                randomScalingFactor() * 100
            ],
            backgroundColor: [
                'rgb(136, 189, 243)',
                'rgb(136, 189, 243)',
                'rgb(136, 189, 243)',
                'rgb(136, 189, 243)',
                'rgb(136, 189, 243)',
                'rgb(136, 189, 243)'
            ]
        }],
        labels: [
            "Pussy trip",
            "Savage trip",
            "Try escape trip",
            "Train trip",
            "No road trip",
            "Speed hack trip"
        ]
    },

    options: {
        responsive: true,
        legend: {
            labels: {
                fontColor: 'rgb(255, 255, 255)'
            }
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#FFFFFF"
                },
                ticks: {
                    min: 0,
                    stepSize: 2000,
                    fontColor: "white"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    color: "#FFFFFF"
                },
                ticks: {
                    fontColor: "white"
                }
            }]
        }
    }
});

let ctx3 = document.getElementById('trip-all-way').getContext('2d');
var myPieChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        datasets: [{
            label: "Mile count",
            data: [
                randomScalingFactor() * 30,
                randomScalingFactor() * 30,
                randomScalingFactor() * 30,
                randomScalingFactor() * 30,
                randomScalingFactor() * 30,
                randomScalingFactor() * 30
            ],
            backgroundColor: [
                'rgb(245, 207, 143)',
                'rgb(245, 207, 143)',
                'rgb(245, 207, 143)',
                'rgb(245, 207, 143)',
                'rgb(245, 207, 143)',
                'rgb(245, 207, 143)'
            ]
        }],
        labels: [
            "Pussy trip",
            "Savage trip",
            "Try escape trip",
            "Train trip",
            "No road trip",
            "Speed hack trip"
        ]
    },

    options: {
        responsive: true,
        legend: {
            labels: {
                fontColor: 'rgb(255, 255, 255)'
            }
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#FFFFFF"
                },
                ticks: {
                    min: 0,
                    stepSize: 700,
                    fontColor: "white",
                    callback: function (label, index, labels) {
                        return label + ' mile';
                    }
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    color: "#FFFFFF"
                },
                ticks: {

                    fontColor: "white"
                }
            }]
        }
    }
});

let ctx4 = document.getElementById('trip-activity').getContext('2d');
var myPieChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: "Trip activity",
            backgroundColor: "rgb(66, 72, 235)",
            borderColor: "rgb(66, 72, 235)",
            data: [
                randomScalingFactor() + 150,
                randomScalingFactor() + 150,
                randomScalingFactor() + 150,
                randomScalingFactor() + 150,
                randomScalingFactor() + 150,
                randomScalingFactor() + 150,
                randomScalingFactor() + 150,
                randomScalingFactor() + 150,
                randomScalingFactor() + 150,
                randomScalingFactor() + 150,
                randomScalingFactor() + 150,
                randomScalingFactor() + 150
            ],
            fill: false
        }],
    },

    options: {
        responsive: true,
        legend: {
            labels: {
                fontColor: 'rgb(255, 255, 255)'
            }
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#FFFFFF"
                },
                ticks: {
                    stepSize: 30,
                    fontColor: "white"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    color: "#FFFFFF"
                },
                ticks: {
                    fontColor: "white"
                }
            }]
        }
    }
});

