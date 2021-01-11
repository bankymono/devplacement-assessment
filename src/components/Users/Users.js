
import UsersItem from '../UsersItem/UsersItem'
import './Users.css'
import {useContext} from 'react'
import Pagination from '../Pagination/Pagination'
import {UsersContext} from '../../App'


const Users = () => {
    const {users,filteredUsers, currentPage,usersPerPage,loading,setCurrentPage} = useContext(UsersContext)

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  
  const currentUsers = (filteredUsers.length  !== 0
        ? filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
        : users.slice(indexOfFirstUser, indexOfLastUser));

    if(loading){
        return <h1 className="users-container">loading...</h1>
    }

    return (
        
            <>
            <div className="users-list-container">
                {currentUsers.map( user => <UsersItem key={user.email} user={user} />)}
            </div>

        
            <Pagination currentUsers ={currentUsers} currentPage={currentPage} setCurrentPage={setCurrentPage} usersPerPage ={usersPerPage} totalUsers={users.length} />
        
        </>
    )
}

export default Users
