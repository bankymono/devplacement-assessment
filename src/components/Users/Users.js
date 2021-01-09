import UserList from '../UserList/UserList'
import UsersItem from '../UsersItem/UsersItem'
import SearchBar from '../SearchBar/SearchBar'
import './Users.css'

const Users = (props) => {
    const {users,loading} = props;

    if(loading){
        return <h1 className="users-container">loading...</h1>
    }

    return (
        <div className="users-container">
            <h1 className="users-heading">All Users</h1>
            <p className="filter">Filter by</p>
            <SearchBar />
            <div className="users-list-container">
                {users.map( user => <UsersItem key={user.login.uuid} user={user} />)}
            </div>
            <UserList />
            {props.children}       
        </div>
    )
}

export default Users
