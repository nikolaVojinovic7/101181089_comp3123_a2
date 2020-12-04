import React, { Component } from 'react'
import WeatherService from "../services/WeatherService";

class WeatherView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            weather: {},
            info: [],
            dayOfWeek: '',
            month: '',
        }
    }



    async componentDidMount(){
        await WeatherService.getWeather()
            .then((res) => {
            this.setState({ weather: res.data, loading:false, info: res.data.weather[0]});
            console.log(this.state.info)
        });
        let dateObject = new Date();
        let day = dateObject.getDay();
        let month = dateObject.getMonth();
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let dayNumber = dateObject.getDate();
        let yearNumber = dateObject.getFullYear();
        this.setState({
            dayOfWeek: days[day],
            month: months[month],
            dayNumber: dayNumber,
            yearNumber: yearNumber,
        })
    }

    render() {
        return (
            <div>

                <div>
                    {this.state.loading ? (
                        <div>loading</div>
                    ): (
                        <div>
                            <div className="page-content page-container" id="page-content">
                                <div className="card card-weather">
                                    <div className="card-body">
                                        <div className="weather-date-location">
                                            <div className="icon">
                                                <img src={`http://openweathermap.org/img/wn/${this.state.info.icon}@2x.png`}
                                                     alt={"Weather Icon"}/>
                                            </div>
                                            <h3>{this.state.dayOfWeek}</h3>
                                            <p className="text-black-50">
                                                <span className="weather-date">{this.state.dayNumber} {this.state.month}, {this.state.yearNumber} -</span>

                                                <span className="weather-location">   {this.state.weather.name}, {this.state.weather.sys.country}</span>
                                            </p>
                                        </div>
                                        <div className="weather-data">
                                            <div className="mr-auto">
                                                <h4 className="display-3">{this.state.weather.main.temp} <span
                                                    className="symbol">°</span>C</h4>
                                                <p> {this.state.info.main} </p>
                                                <p>{this.state.info.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="d-flex weakly-weather">
                                            <div className="weakly-weather-item">
                                                <p className="mb-0"> Feels Like: </p>
                                                <p className="mb-0"> {this.state.weather.main.feels_like} °C</p>
                                            </div>
                                            <div className="weakly-weather-item">
                                                <p className="mb-1"> Max Temperature: </p>
                                                <p className="mb-0"> {this.state.weather.main.temp_max} °C</p>
                                            </div>
                                            <div className="weakly-weather-item">
                                                <p className="mb-1"> Min Temperature: </p>
                                                <p className="mb-0"> {this.state.weather.main.temp_min} °C</p>
                                            </div>
                                            <div className="weakly-weather-item">
                                                <p className="mb-1"> Pressure: </p>
                                                <p className="mb-0"> {this.state.weather.main.pressure} </p>
                                            </div>
                                            <div className="weakly-weather-item">
                                                <p className="mb-1"> Humidity: </p>
                                                <p className="mb-0">{this.state.weather.main.humidity}</p>
                                            </div>
                                            <div className="weakly-weather-item">
                                                <p className="mb-1"> Wind Speed: </p>
                                                <p className="mb-0"> {this.state.weather.wind.speed} </p>
                                            </div>
                                            <div className="weakly-weather-item">
                                                <p className="mb-1"> Wind Degree: </p>
                                                <p className="mb-0"> {this.state.weather.wind.deg}° </p>
                                            </div>
                                            <div className="weakly-weather-item">
                                                <p className="mb-1"> Latitude: </p>
                                                <p className="mb-0"> {this.state.weather.coord.lat}° </p>
                                            </div>
                                            <div className="weakly-weather-item">
                                                <p className="mb-1"> Longitude: </p>
                                                <p className="mb-0"> {this.state.weather.coord.lon}° </p>
                                            </div>
                                            <div className="weakly-weather-item">
                                                <p className="mb-1"> Sea Level: </p>
                                                <p className="mb-0"> {this.state.weather.main.sea_level} m </p>
                                            </div>
                                            <div className="weakly-weather-item">
                                                <p className="mb-1"> Ground Level: </p>
                                                <p className="mb-0"> {this.state.weather.main.grnd_level} m </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        )
    }
}

export default WeatherView
