import React,{useContext} from 'react';
import {FiSearch} from 'react-icons/fi';
import {UsersContext} from '../../App';

import './SearchBar.css'

const SearchBar = ({searchParam, setSearchParam, filteredUsers,setFilteredUsers}) => {
    const {users} = useContext(UsersContext)
    
    const handleChange = (e)=>{
        setSearchParam(e.target.value);
        
        const filtered =(e.target.value !== ''? users.filter(user => user.gender.toLowerCase().includes(searchParam.toLowerCase())):[])

        setFilteredUsers(filtered);
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
