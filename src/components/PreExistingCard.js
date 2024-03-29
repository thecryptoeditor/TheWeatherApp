import React from 'react';
import '../Assets/common.css'

export const PreExistingCard = (props) => {

    let city_data = props.defaultData.cityData.data[0];
    let weather_data = props.defaultData.weatherData.current;
    
    let date = new Date()
    let day = date.getDay()
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let currentDay = days[day - 1]
    let month = date.getMonth()
    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
    let currentMonth = months[month]
    let toayDate = date.getDate()

    return (
        <div className="container" style={{maxWidth: '820px'}}>
            <div className="page-content page-container" id="page-content">
                <div className="card card-weather">
                    <div className="card-body">
                        <div className="weather-date-location">
                            <h3>{currentDay}</h3>
                            <p className="text-gray"> 
                                <span className="weather-date">{toayDate} {currentMonth}, 2021</span>
                                <br />
                                <span className="weather-location text-gray">{city_data.locality} , {city_data.region} , {city_data.country}</span>
                            </p>
                        </div>
                        <div className="mr-auto">
                            <h4 className="display-3">
                                {weather_data.temp.toFixed(0)}
                                <span className="symbol">°</span>C
                            </h4>
                            <p> Cloudiness: {weather_data.clouds}%</p>
                            <p>Status: {weather_data.weather[0].main}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )  
}
