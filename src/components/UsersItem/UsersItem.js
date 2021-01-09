import React from 'react'
import './UsersItem.css'

const UsersItem = ({user}) => {
    return (
        <div className="users-list-item">
            {/* <div className="image-container"><img src={user.picture.medium} alt="profile"/></div> */}
            <img className="users-list-item-image"src={user.picture.medium} alt="profile"/>
            <div className='user-list-item-details'>
                <div>{user.name.first} {user.name.last}</div>
            </div>
        </div>
    )
}

export default UsersItem
