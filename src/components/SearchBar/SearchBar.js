import React,{useContext} from 'react';
import {FiSearch} from 'react-icons/fi';
import {UsersContext} from '../../App';

import './SearchBar.css'

const SearchBar = ({sieve, setSieve, searchParam, setSearchParam, filteredUsers,setFilteredUsers}) => {

    const {users} = useContext(UsersContext)
    // let sieves = 'country';
    const handleChange = (e)=>{
        // console.log(sieves)
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
        // const filtered =(e.target.value !== ''? users.filter(user => {
        //         const fullname =  user.name.first + user.name.first 
                
        //         return fullname.toLowerCase().includes(searchParam.toLowerCase())
        //                                                     }):[])

        setFilteredUsers(filtered);
    // }
    }
    const handleSelect = (e)=>{
        // sieves = e.target.value;
        // console.log('ase',sieves)
        setSieve(e.target.value)
        // console.log('ase',sieve)

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
                     <option value="gender">Gender</option>
                     <option value="age">Age</option>
                 </select>
             </div>
             <div className="search-bar-country-checkbox"><input type="checkbox" /><p>show country</p></div>
        </div>
    )
}

export default SearchBar
