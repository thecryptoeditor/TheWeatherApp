import React from 'react';
import './common.css'

export const DailyForcast = () => {
    return (
        <div className="container" style={{maxWidth: '820px', color: 'white'}}>
            <div className="carouselInner">
            <h3 style={{marginBottom: '30px'}}>Daily Forcast</h3>
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col daily-forcast">
                            <div className="row row1">21&deg;</div>
                            <img className="img-fluid" alt="forcast Images" src="https://img.icons8.com/ios/100/000000/sun.png" />
                            <div className="row row3">12:00 PM</div>
                        </div>
                        <div className="col daily-forcast">
                            <div className="row row1">20&deg;</div>
                            <img className="img-fluid" alt="forcast Images" src="https://img.icons8.com/ios/100/000000/sun.png" />
                            <div className="row row3">1:00 PM</div>
                        </div>
                        <div className="col daily-forcast">
                            <div className="row row1">20&deg;</div>
                            
                            <img className="img-fluid" alt="forcast Images" src="https://img.icons8.com/windows/100/000000/cloud.png" />
                            <div className="row row3">2:00 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


