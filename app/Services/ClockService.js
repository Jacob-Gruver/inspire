class ClockService {
    getClock() {
        let date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        hour = this.updateClock(hour);
        min = this.updateClock(min);
        return hour + ":" + min;
    }
    updateClock(time) {
        if (time < 10) {
            return "0" + time;
        } else {
            return time;
        }
    }
    clockTemplate() {
        return `
        
        `
    }
}

const clockService = new ClockService();
export default clockService;