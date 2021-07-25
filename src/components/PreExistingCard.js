import React from 'react';
import './common.css'

export const PreExistingCard = () => {
    return (
        <div className="container" style={{maxWidth: '820px'}}>
            <div class="page-content page-container" id="page-content">
                <div class="card card-weather">
                    <div class="card-body">
                        <div class="weather-date-location">
                            <h3>Friday</h3>
                            <p class="text-gray"> <span class="weather-date">25 March, 2019</span> <span class="weather-location">Sydney, Australia</span> </p>
                        </div>
                        <div class="mr-auto">
                            <h4 class="display-3">32 <span class="symbol">°</span>C</h4>
                            <p> Cloudy </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )  
}

