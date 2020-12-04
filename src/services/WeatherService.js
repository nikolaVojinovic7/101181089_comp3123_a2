import axios from 'axios';

const WEATHER_API_BASE_URL = "http://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&APPID=f003131b2b2892335cce20f67283de38&units=metric";

class WeatherService {

    async getWeather(){
        return await axios.get(WEATHER_API_BASE_URL);
    }
}

export default new WeatherService();
