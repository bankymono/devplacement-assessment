import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {IoIosPeople} from 'react-icons/io'
import {BiMale} from 'react-icons/bi'
import {FaFemale} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import './Dashboard.css'


const Dashboard = () => {
    return (
<div className="dashboard-container">
      <div className="dashboard">
        <h1>Hello, <b>Emerald</b></h1>
        <p className="welcome-message">Welcome to your dashboard, kindly sort through the user base</p>
        <div className="dashboard-search-bar">
          <FiSearch className="search-icon"/>
          <input placeholder="Find a user" />
        </div>
        <p className="users-control-header">Show Users</p>
        <div className="users-control-container">
          <div>
            <NavLink to="/"><div className="control-icon" id="all-icon-container"><IoIosPeople color="white" /></div></NavLink><p>All users</p>
          </div>
          <div>
            <div className="control-icon" id="male-icon-container"><BiMale /></div><p>Male users</p>
          </div>
          <div>
            <div className="control-icon" id="female-icon-container"><FaFemale /></div><p>Female users</p>
          </div>
        </div>
      </div>
      </div>

    )
}

export default Dashboard
