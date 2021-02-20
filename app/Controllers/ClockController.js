import clockService from "../Services/ClockService.js";

function _drawClock() {
    document.getElementById('clock').innerText = clockService.getClock();
}

export default class ClockController {
    constructor() {
        setInterval(() => {_drawClock()}, 300);
        // this is a set interval for drawing the clock every 3 sec 
    }
}