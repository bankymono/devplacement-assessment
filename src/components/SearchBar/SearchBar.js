import React,{useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import './SearchBar.css'

const SearchBar = () => {

    const [value, setValue] = useState('')

    const handleChange = (e) =>{
        setValue(e.target.value)
        console.log(value)
    }

    return (
        <div className="search-bar-container">
            <div className="search-bar-search">
                <FiSearch className="search-icon"/>
                <input onChange={handleChange} placeholder="Find in list" />
             </div>

             <div className="search-bar-select-country">
                 <select>
                     <option>sample</option>
                 </select>
             </div>
             <div className="search-bar-country-checkbox"><input type="checkbox" /><p>show country</p></div>
        </div>
    )
}

export default SearchBar
