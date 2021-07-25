import React from 'react';
import './common.css'

export const Search = () => {
  return (
        <div className="container">
            <div class="search-box">
              <input class="search-input" type="text" placeholder="Search something.." />
              <button class="search-btn"><i class="fas fa-search"></i></button>
            </div>
        </div>
    )
}



