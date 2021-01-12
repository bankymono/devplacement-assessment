import UsersItem from '../UsersItem/UsersItem'
// import SearchBar from '../SearchBar/SearchBar'
import './MaleUsers.css'
import {useContext} from 'react'
import Pagination from '../Pagination/Pagination'
import {UsersContext} from '../../App'


const MaleUsers = () => {
  const {users,filteredUsers, currentPage,usersPerPage,loading,setCurrentPage} = useContext(UsersContext)
  const maleUsers = users.filter(user => user.gender === "male")
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
    let currentUsers = []
        if(filteredUsers.length === 0){
            currentUsers = maleUsers.slice(indexOfFirstUser, indexOfLastUser)       
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
            <div className="users-list-container">
                
                {currentUsers.map( user => <UsersItem key={user.email} user={user} />)}
            </div>


            <Pagination currentUsers ={currentUsers} currentPage={currentPage} setCurrentPage={setCurrentPage} usersPerPage ={usersPerPage} totalUsers={users.length} />
        
        </>
    )
}

export default MaleUsers
