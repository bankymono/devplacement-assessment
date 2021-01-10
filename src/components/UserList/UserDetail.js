import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {UsersContext} from '../../App'
import './UserList.css';


const User = (props) => {
    const {users}= useContext(UsersContext)
        

    const { match:{ params: {userid}}} = props

    console.log('what is this', userid)

    return (
        <div className="user-detail-container">
            <button><NavLink to="/">Go back</NavLink></button>
            {/* <div>{user.name.first}</div> */}
            {console.log(users)}
            {users.map(user => user.id.value === userid?<div key={user.id.value}>{user.name.first}</div>:null)}
        </div>
    )
}

export default User
