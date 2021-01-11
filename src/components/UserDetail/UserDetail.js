import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {UsersContext} from '../../App';
import {GrFormPreviousLink} from 'react-icons/gr';
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import {ImMobile} from 'react-icons/im'
import './UserDetail.css';
import Pagination from '../Pagination/Pagination';


const User = (props) => {
    const {users}= useContext(UsersContext)
        

    const { match:{ params: {userid}}} = props



    return (
        <div className="user-detail-container">
            <div className="return-button"><NavLink className="anchor" to="/"><GrFormPreviousLink color='red' /> Results</NavLink></div>
            {users.map(user => user.email === userid?<div key={user.email}>
                <div className="users-detail-item">
                    <img className="users-detail-image"src={user.picture.large} alt="profile"/>
                    <div className='user-detail-details'>
                        <div className="user-detail-fullname">{user.name.title} {user.name.first} {user.name.last} <span>{user.dob.age}</span></div>
                        <div className="user-detail-address">
                            {user.location.street.number} {user.location.street.name},{' '} 
                            {user.location.city},{' '} 
                            {user.location.state},{' '} 
                            {user.location.country}{' '}</div>
                        <div className="user-detail-contact-details">
                            <div className="user-detail-email"><AiOutlineMail className="message-icon"/><p>{user.email}</p></div>
                            <div className="user-detail-registered"><p>JOINED:</p><p>{user.registered.date.split('T')[0]}</p></div>
                            <div className="user-detail-phone"><FiPhoneCall className="phone-icon" /><p>{user.cell}</p></div>
                            <div className="user-detail-phone"><ImMobile className="mobile-icon" /><p>{user.cell}</p></div>
                        </div>
                    </div>
                </div>
                <Pagination currentPage={null} setCurrentPage={null} usersPerPage ={null} totalUsers={null} />
                </div>
                :null)}
        </div>
    )
}

export default User
