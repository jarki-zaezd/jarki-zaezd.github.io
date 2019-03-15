class WeatherItem {
    constructor(min, max, status, day) {
        this.min = parseInt(min);
        this.max = parseInt(max);
        this.status = status;
        this.day = parseInt(day);
    }
}