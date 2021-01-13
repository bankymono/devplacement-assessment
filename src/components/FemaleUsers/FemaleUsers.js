
import UsersItem from '../UsersItem/UsersItem'
// import SearchBar from '../SearchBar/SearchBar'
import './FemaleUsers.css'
import {useContext} from 'react'
import Pagination from '../Pagination/Pagination'
import {UsersContext} from '../../App'


const FemaleUsers = (props) => {
    const {divRef} = useContext(UsersContext)
  const {users, filteredUsers, currentPage,usersPerPage,loading,setCurrentPage} = useContext(UsersContext)
  const femaleUsers = users.filter(user => user.gender === "female")
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

    let currentUsers = []

    if(filteredUsers.length === 0){
        currentUsers = femaleUsers.slice(indexOfFirstUser, indexOfLastUser)       
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
         
            <div className="user-list-container-slidein" ref={divRef}>
                {currentUsers.map( user => <UsersItem parentProp={props} divRef={divRef} key={user.email} user={user} />)}
            </div>

            {/* {props.children}        */}
            <Pagination currentUsers ={currentUsers} currentPage={currentPage} setCurrentPage={setCurrentPage} usersPerPage ={usersPerPage} totalUsers={users.length} />
        
        </>
    )
}

export default FemaleUsers
