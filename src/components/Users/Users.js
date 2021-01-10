
import UsersItem from '../UsersItem/UsersItem'
import SearchBar from '../SearchBar/SearchBar'
import './Users.css'
import {useContext} from 'react'
import Pagination from '../Pagination/Pagination'
import {UsersContext} from '../../App'


const Users = () => {
    const {users,currentPage,usersPerPage,loading,setCurrentPage} = useContext(UsersContext)

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    if(loading){
        return <h1 className="users-container">loading...</h1>
    }

    return (
        <div className="users-container">
            <h1 className="users-heading">All Users</h1>
            <p className="filter">Filter by</p>
            <SearchBar />
            <div className="users-list-container">
                {currentUsers.map( user => <UsersItem key={user.id.value} user={user} />)}
            </div>

            {/* {props.children}        */}
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} usersPerPage ={usersPerPage} totalUsers={users.length} />
        </div>
    )
}

export default Users
