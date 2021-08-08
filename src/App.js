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
        cityData: [],
        weatherData: []
    })

    const [search, defaultSearch] = React.useState({
        city: 'Gurgaon'
    })

    const SearchValue = (value) => {
        defaultSearch({city: value})
    }


    // this useEffect use for to find out lat, lng from the city name
    React.useEffect(() => {
        if(search !== null && search !== undefined) { 
        (async () => {
            const response = await fetch(`http://api.positionstack.com/v1/forward?access_key=f0f649f70b71f26e55608d63b219b2be&query=${search.city}`)
            const res = await response.json();
            YouComponent(res.data[0].latitude, res.data[0].longitude)
        })();
    }}, [search])


   // this useEffect use for find out weather related info from open weather APIs
    const YouComponent = (lat, lng) => { 
        (async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&appid=46d1711f5c49c9b2ca9607500c0c75bc&units=metric`)
            const res = await response.json();

            const result = await fetch(`http://api.positionstack.com/v1/reverse?access_key=f0f649f70b71f26e55608d63b219b2be&query=${lat},${lng}`);
            const data = await result.json();

            setState({defaultCountry: true, weatherData: res, cityData: data})
        })()
    }

    return (
        <Router>
            <div className="todo">
                <Header Heading="Your task list here:"/>
                <Search onSearch={SearchValue}/>
                { state.defaultCountry === true ? <PreExistingCard defaultData={state}  /> : <div style={{textAlign:'center'}}>Loading...</div>}
                <DailyForcast />
                <Footer />
            </div>
        </Router>
    );

}


// S Block. Gurgaon, India.
// 28.4939038, 77.1052034
