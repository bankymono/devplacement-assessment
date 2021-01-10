import axios from 'axios';
import {useState, useEffect, createContext} from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Users from './components/Users/Users';
import UserList from './components/UserList/UserDetail';
import Dashboard from './components/Dashboard/Dashboard';

export const UsersContext = createContext()

function App() {
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);

  useEffect(()=>{
    const fetchUsers = async () => {
      setLoading(true);
      // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const res = await axios.get('https://randomuser.me/api/?results=10&inc=name,email,id,picture,location,cell,phone');
      setUsers(res.data.results);

      setLoading(false);
      localStorage.setItem('users', JSON.stringify(res.data.results))
      
    }

    fetchUsers();
  },[]);
  
  return (
    <div className="App">
      <UsersContext.Provider value = {{users,loading,currentPage,usersPerPage,setCurrentPage}}>
        <Dashboard />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/:userid" component={UserList} />
        </Switch>
        </UsersContext.Provider>
    </div>
  );
}

export default App;
