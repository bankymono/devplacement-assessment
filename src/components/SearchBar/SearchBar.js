import React,{useContext} from 'react';
import {FiSearch} from 'react-icons/fi';
import {UsersContext} from '../../App';

import './SearchBar.css'

const SearchBar = ({sieve, setSieve, setShowCountry, setFilteredUsers}) => {

    const {users} = useContext(UsersContext)

    const handleChange = (e)=>{
        
        let filtered = [];
        if( sieve === 'country'){
             filtered = (e.target.value === '' ?['null'] : users.filter(user => {
                  
                return user.location.country.toLowerCase().includes(e.target.value.toLowerCase())
            })) 

            if(filtered.length === 0) filtered = ['null']
            if(e.target.value === '') filtered = []
        }
        else
        if( sieve === 'age'){
            filtered = (e.target.value === '' ?['null'] : users.filter(user => {
                console.log('hey')
                  const tosearch = "" + user.dob.age;
                return tosearch.includes(e.target.value)
            })) 

            if(filtered.length === 0) filtered = ['null']
            if(e.target.value === '') filtered = []
        }
        else if( sieve === 'gender'){
            filtered = (e.target.value === '' ?['null'] : users.filter(user => {
                  
                return user.gender.toLowerCase().includes(e.target.value.toLowerCase())
            })) 

            if(filtered.length === 0) filtered = ['null']
            if(e.target.value === '') filtered = []
        }

        setFilteredUsers(filtered);
    // }
    }

    const handleSelect = (e)=>{

        setSieve(e.target.value)

    }

    const toggleCountryDisplay = (e) =>{
            if(e.target.checked )
            setShowCountry(e.target.checked)
            else
            setShowCountry(e.target.checked)

    }

    return (
        <div className="search-bar-container">
            <div className="search-bar-search">
                <FiSearch className="search-icon"/>
                <input onChange={handleChange} placeholder="Find in list" />
             </div>

             <div className="search-bar-select-country">
                 <select defaultValue='country' onChange={handleSelect}  id="user-select">
                     <option value="country">Country</option>
                     <option value="age">Age</option>
                 </select>
             </div>
             <div className="search-bar-country-checkbox"><input onChange={toggleCountryDisplay} type="checkbox" /><p>show country</p></div>
        </div>
    )
}

export default SearchBar
