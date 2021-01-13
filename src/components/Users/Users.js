
import UsersItem from '../UsersItem/UsersItem'
import './Users.css'
import {useContext,useRef} from 'react'
import Pagination from '../Pagination/Pagination'
import {UsersContext} from '../../App'


const Users = (props) => {
    const {divRef} = useContext(UsersContext)

    // divRef.current.classList.add('users-list-container-slidein')

    const {users,filteredUsers, currentPage,usersPerPage,loading,setCurrentPage} = useContext(UsersContext)
    // setDivRef(divRef.current)
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  
  let currentUsers=[];

        if(filteredUsers.length === 0){
            currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)       
        }
        else if( filteredUsers[0] === 'null'){
            currentUsers = []
        } else {
            currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
        }
    if(loading){
        return <h1 className="users-container">loading...</h1>
    }

    return (
        
            <>
            <div className="user-list-container-slidein" ref={divRef} >
                
                {currentUsers.map( user => <UsersItem parentProp={props} divRef={divRef} key={user.email} user={user} />)}
            </div>

        
            <Pagination currentUsers ={currentUsers} currentPage={currentPage} setCurrentPage={setCurrentPage} usersPerPage ={usersPerPage} totalUsers={users.length} />
        
        </>
    )
}

export default Users
