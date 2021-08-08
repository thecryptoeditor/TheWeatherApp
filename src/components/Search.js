import React from 'react';
import '../Assets/common.css'

export const Search = (props) => {

    const [searchData, setCityName] = React.useState({
        city: 'Gurgaon'
    })

    const searchByCityForm = (evt) => {
        evt.preventDefault();
        props.onSearch(searchData.city)
    }

    const searchChange = (evt) => {
        setCityName({city: evt.target.value})
    }

    return (
        <div className="container">
            <div className="search-box" style={{margin: '30px auto'}}>
                <form onSubmit={searchByCityForm}>
                    <input 
                        className="search-input" 
                        name="search" 
                        type="text" 
                        value={searchData.city} 
                        placeholder="City Name"
                        onChange={searchChange}
                    />
                    <button 
                        type="submit" 
                        className="search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}
