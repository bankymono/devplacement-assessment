import React,{useContext,useRef} from 'react';
import {GrFormNextLink} from 'react-icons/gr'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import {NavLink} from 'react-router-dom'

import './UsersItem.css'
import {UsersContext} from '../../App';

const UsersItem = (props) => {
    const aRef = useRef(null)
    const {user} = props;

    const {setGoForward,setGoBack, showCountry} = useContext(UsersContext)

    const handleClick = (e) =>{
        e.preventDefault();

        setGoForward('users-list-container')
        setGoBack('')
        // divRef.current.classList.remove('users-list-container-slidein')
        // divRef.current.classList.add('users-list-container')
        
       setTimeout(()=>{props.parentProp.history.push(`/${user.email}`)},300) 
        
    }

    return (
        <div className="users-list-item">
            <img className="users-list-item-image"src={user.picture.medium} alt="profile"/>
            <div className='user-list-item-details'>
                <div className="user-fullname">{user.name.first} {user.name.last}</div>
                <div className="user-address">
                    {user.location.street.number} {user.location.street.name},{' '} 
                    {user.location.city},{' '} 
                    {user.location.state}{' '} 
                    {showCountry ?<div className='user-country'>{user.location.country}{' '}</div>:null}
                </div>
                <div className="user-contact-details">
                    <div className="user-email"><AiOutlineMail className="message-icon"/><p>{user.email}</p></div>
                    <div className="user-phone"><FiPhoneCall className="phone-icon" /><p>{user.cell}</p></div>
                    <div className="user-list-item-next">
                        <NavLink ref={aRef} onClick={handleClick} to={'/' + user.email}><GrFormNextLink className="next-icon"/></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersItem
