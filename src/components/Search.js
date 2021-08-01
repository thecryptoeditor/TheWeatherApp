import React from 'react';
import './common.css'

export const Search = (props) => {

    const [searchData, setSearch] = React.useState({
        city: ''
    })

    const searchForm = (evt) => {
        evt.preventDefault();
        props.onSearch(searchData.city)
    }

    const searchChange = (evt) => {
        setSearch({city: evt.target.value})
    }

    return (
        <div className="container">
            <div className="search-box" style={{margin: '30px auto'}}>
                <form onSubmit={searchForm}>
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
