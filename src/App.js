import React from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {Search} from "./components/Search";
import { PreExistingCard } from "./components/PreExistingCard";
import { DailyForcast } from "./components/DailyForcast";
import { BrowserRouter as Router, // Switch, // Route
} from "react-router-dom";

export const App = () => {

    const [state, setState] = React.useState({
        defaultCountry: false,
        lat: '',
        lon: '',
        weatherData: []
    })

    const [search, defaultSearch] = React.useState()

    const SearchValue = (value) => {
        defaultSearch(value)
    }


    // this useEffect use for to find out lat, lng from the city name
    React.useEffect(() => {
        if(search !== null && search !== undefined) { 
        (async () => {
            const response = await fetch(`http://api.positionstack.com/v1/forward?access_key=f0f649f70b71f26e55608d63b219b2be&query=${search}`)
            const res = await response.json();
            setState({lat: res.data[0].latitude, lon: res.data[0].longitude})
        })();
    }}, [search])


   // this useEffect use for find out weather related info from open weather APIs
    React.useEffect(() => {
        if(state.lat !== undefined && state.lat !== '') {   
            (async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${state.lat}&lon=${state.lon}&exclude=minutely&appid=46d1711f5c49c9b2ca9607500c0c75bc&units=metric`)
                const res = await response.json();
                setState({defaultCountry: true, weatherData: res})
            })()
        }
    },[state.lat, state.lon])

    return (
        <Router>
            <div className="todo">
                <Header Heading="Your task list here:"/>
                <Search onSearch={SearchValue}/>
                { state.defaultCountry === true ? <PreExistingCard defaultData={state.weatherData} /> : ''}
                <DailyForcast />
                <Footer />
            </div>
        </Router>
    );

}


// S Block. Gurgaon, India.
// 28.4939038, 77.1052034
