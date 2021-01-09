import UserList from '../UserList/UserList'
import './Users.css'

const Users = ({users,loading}) => {
    if(loading){
        return <h1>loading...</h1>
    }

    return (
        <div className="users-container">
            users list
            <ul className="list-group mb-4">
                {users.map( user => <li className="list-group-item" key={user.id}>{user.name}</li>)}
            </ul>

            <UserList />       
        </div>
    )
}

export default Users
