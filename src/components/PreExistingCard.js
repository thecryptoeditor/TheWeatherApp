import React from 'react';
import './common.css'

export const PreExistingCard = (props) => {
    console.log(props)
    return (
        <div className="container" style={{maxWidth: '820px'}}>
            <div className="page-content page-container" id="page-content">
                <div className="card card-weather">
                    <div className="card-body">
                        <div className="weather-date-location">
                            <h3>Friday</h3>
                            <p className="text-gray"> <span className="weather-date">25 March, 2019</span> <span className="weather-location">Sydney, Australia</span> </p>
                        </div>
                        <div className="mr-auto">
                            <h4 
                            className="display-3">
                            {props.defaultData === "" ? '' : props.defaultData.current.temp.toFixed(0)}
                            <span className="symbol">°</span>C</h4>
                            <p> Cloudiness: {props.defaultData === "" ? '' : props.defaultData.current.clouds}%</p>
                            <p>Status: {props.defaultData === "" ? '' : props.defaultData.current.weather[0].main}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )  
}




