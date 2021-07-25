import React from 'react';
import './common.css'

export const DailyForcast = () => {
    return (
        <div className="container" style={{maxWidth: '820px', color: 'white'}}>
            <div className="carouselInner">
            <h3 style={{marginBottom: '30px'}}>Daily Forcast</h3>
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col" style={{borderRight: '1px solid white'}}>
                            <div class="row row1">21&deg;</div>
                            <div class="row row2"><img class="img-fluid" src="https://img.icons8.com/ios/100/000000/sun.png" /></div>
                            <div class="row row3">12:00</div>
                            <div class="row row4">PM</div>
                        </div>
                        <div class="col">
                            <div class="row row1">20&deg;</div>
                            <div class="row row2"><img class="img-fluid" src="https://img.icons8.com/ios/100/000000/sun.png" /></div>
                            <div class="row row3">1:00</div>
                            <div class="row row4">PM</div>
                        </div>
                        <div class="col">
                            <div class="row row1">20&deg;</div>
                            <div class="row row2"><img class="img-fluid" src="https://img.icons8.com/windows/100/000000/cloud.png" /></div>
                            <div class="row row3">2:00</div>
                            <div class="row row4">PM</div>
                        </div>
                        <div class="col">
                            <div class="row row1">19&deg;</div>
                            <div class="row row2"><img class="img-fluid" src="https://img.icons8.com/windows/100/000000/cloud.png" /></div>
                            <div class="row row3">3:00</div>
                            <div class="row row4">PM</div>
                        </div>
                        <div class="col">
                            <div class="row row1">18&deg;</div>
                            <div class="row row2"><img class="img-fluid" src="https://img.icons8.com/ios/100/000000/sun.png" /></div>
                            <div class="row row3">4:00</div>
                            <div class="row row4">PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


