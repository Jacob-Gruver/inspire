import clockService from "../Services/ClockService.js";

function _drawClock() {
    document.getElementById('clock').innerText = clockService.getClock();
}

export default class ClockController {
    constructor() {
        setInterval(() => {_drawClock()}, 300); 
    }
}