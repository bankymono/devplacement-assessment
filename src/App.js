import ajaxfetch from './services/ajaxfetch'
import {useState, useEffect, createContext} from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
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
  
  const [goForward,setGoForward] = useState(''); // state to control animation going from list of users to single user
  const [goBack,setGoBack] = useState(''); // state to control animation going from user detail to list of users

  // states to control button size animation
  const [pinkButton, setPinkButton] = useState(''); 
  const [blueButton, setBlueButton] = useState('');
  const [purpleButton, setPurpleButton] = useState('');

  // state to manage users info
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sieve, setSieve] = useState('country');
  const [showCountry, setShowCountry] = useState(false);


  const [loading,setLoading] = useState(false);
  
  // state for page management and pagination
  const [currentPage,setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);



  // Fetch user as components render
  useEffect(()=>{
    const fetchUsers = async () => {
      setLoading(true);
      
      const res = await ajaxfetch()
      setUsers(res);

      setLoading(false);       
    }

    fetchUsers();
  },[]);
  
  return (
    <div className="App">
      <Router>
      <UsersContext.Provider 
        value={ {goForward, 
                  setGoForward, 
                  goBack, 
                  setGoBack, 
                  users:users,
                  filteredUsers, 
                  showCountry, 
                  loading,
                  currentPage,
                  usersPerPage,
                  setCurrentPage}}>
          <Dashboard 
                pinkButton={pinkButton}
                blueButton={blueButton}
                purpleButton={purpleButton}
                setPinkButton={setPinkButton} 
                setBlueButton={setBlueButton} 
                setPurpleButton={setPurpleButton} 
                setFilteredUsers={setFilteredUsers} />
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
      </Router>
    </div>
  );
}

export default App;
