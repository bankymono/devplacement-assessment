import React from 'react'
import {GrFormNextLink} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import './UsersItem.css'

const UsersItem = ({user}) => {
    return (
        <div className="users-list-item">
            <img className="users-list-item-image"src={user.picture.medium} alt="profile"/>
            <div className='user-list-item-details'>
                <div className="user-fullname">{user.name.first} {user.name.last}</div>
                <div className="user-address">{user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}</div>
                <div className="user-contact-details"><div className="user-email"><AiOutlineMail className="message-icon"/><p>{user.email}</p></div><div className="user-phone"><FiPhoneCall className="phone-icon" /><p>{user.cell}</p></div><div className="user-list-item-next"><GrFormNextLink /></div></div>
            </div>
        </div>
    )
}

export default UsersItem
