import React,{useContext,useRef}from 'react'
import {FiSearch} from 'react-icons/fi'
import {IoIosPeople} from 'react-icons/io'
import {BiMale} from 'react-icons/bi'
import {FaFemale} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import {UsersContext} from '../../App'
import './Dashboard.css'


const Dashboard = (props) => {
  const {pinkButton,purpleButton, blueButton, setBlueButton, setPurpleButton, setPinkButton, setFilteredUsers,divRef} = props
  const {users} = useContext(UsersContext)
  const anime1 = useRef(null)
  const anime2 = useRef(null)
  const anime3 = useRef(null)

  const handleChange = (e) =>{    

    let filtered = (e.target.value === '' ?['null'] : users.filter(user => {
      let userFullName = `${user.name.first} ${user.name.last}`;              
      return userFullName.toLowerCase().includes(e.target.value.toLowerCase())
    })) 

    if(filtered.length === 0) filtered = ['null']
    if(e.target.value === '') filtered = []

  setFilteredUsers(filtered);
  }

  const handleClick = (e) =>{
    // setClicked('anime-class')
}


    return (
      <div className="dashboard-container">
            <div className="dashboard">
              <h1>Hello, <b>Emerald</b></h1>
              <p className="welcome-message">Welcome to your dashboard, kindly sort through the user base</p>
              <div className="dashboard-search-bar">
                <FiSearch className="search-icon"/>
                <input onChange ={handleChange} placeholder="Find a user" />
              </div>
              <p className="users-control-header">Show Users</p>
              <div className="users-control-container">
                <div  onClick={()=> { setPinkButton('anime-class');setPurpleButton('');setBlueButton('')}} className={pinkButton} ref={anime1} >
                  <NavLink to="/"><div className="control-icon" id="all-icon-container"><IoIosPeople color="white" /></div></NavLink><p>All users</p>
                </div>
                <div ref={anime2} onClick={()=> { setPinkButton('');setPurpleButton('');setBlueButton('anime-class')}} className={blueButton}>
                <NavLink  to="/maleusers"><div className="control-icon" id="male-icon-container"><BiMale color="white"/></div></NavLink><p>Male users</p>
                </div>
                <div ref={anime3} onClick={()=> { setPinkButton('');setPurpleButton('anime-class');setBlueButton('')}} className={purpleButton}>
                <NavLink to="/femaleusers"><div className="control-icon" id="female-icon-container"><FaFemale color="white"/></div></NavLink><p>Female users</p>
                </div>
              </div>
            </div>
            </div>
    )
}

export default Dashboard
