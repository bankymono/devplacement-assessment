import axios from 'axios';
import {useState, useEffect, createContext, useRef} from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Users from './components/Users/Users';
import UserList from './components/UserDetail/UserDetail';
import Dashboard from './components/Dashboard/Dashboard';
import SearchBar from './components/SearchBar/SearchBar';
import MaleUsers from './components/MaleUsers/MaleUsers';
import FemaleUsers from './components/FemaleUsers/FemaleUsers';

export const UsersContext = createContext()

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sieve, setSieve] = useState('country');
  const [showCountry, setShowCountry] = useState(false);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);

  const divRef = useRef(null)


  useEffect(()=>{
    const fetchUsers = async () => {
      setLoading(true);
      // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const res = await axios.get('https://randomuser.me/api/?results=40&noinfo');
      setUsers(res.data.results);
      
      setLoading(false);
       
    }

    fetchUsers();
  },[]);
  
  return (
    <div className="App">
      <UsersContext.Provider value = {{divRef, users,filteredUsers, showCountry, loading,currentPage,usersPerPage,setCurrentPage}}>
        <Dashboard divRef={divRef} setFilteredUsers={setFilteredUsers}/>
        <div className="users-container">
        <h1 className="users-heading">All Users</h1>
        <p className="filter">Filter by</p>
            
        <SearchBar 
              setShowCountry={setShowCountry}
              filteredUsers = {filteredUsers} 
              sieve = {sieve} 
              setSieve = {setSieve} 
              setFilteredUsers={setFilteredUsers} />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/maleusers" component={MaleUsers} />
          <Route exact path="/femaleusers" component={FemaleUsers} />
          <Route exact path="/:userid" component={UserList} />
        </Switch>
        </div>
        </UsersContext.Provider>
    </div>
  );
}

export default App;
