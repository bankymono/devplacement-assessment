import React from 'react'
import {FiSearch} from 'react-icons/fi'
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="search-bar-search">
                <FiSearch className="search-icon"/>
                <input placeholder="Find in list" />
             </div>

             <div className="search-bar-country">
                 <select>
                     <option>sample</option>
                 </select>
             </div>
             <div>show country</div>
        </div>
    )
}

export default SearchBar
