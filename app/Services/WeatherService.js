import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

//bcw-sandbox.herokuapp.com/api/weather

class WeatherService {
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }
  tempChange(temp, arg) {
    let faren = Math.floor(9 / 5 * (temp - 273) + 32);
    let cels = Math.floor(temp - 273.15);
    let selected;
    let type = '';
    if (arg == "celsius") {
      selected = cels;
      type = 'C';
    }
    if (arg == "fahrenheit") {
      selected = faren;
      type = 'F';
    }
    return (ProxyState.weather.newTemp = selected) && (ProxyState.weather.type = type);
   }
}


const weatherService = new WeatherService();
export default weatherService;