import axios from 'axios';
import {useEffect, useState} from 'react'
import './App.css';
import {FiSearch} from 'react-icons/fi'
import {IoIosPeople} from 'react-icons/io'
import {BiMale} from 'react-icons/bi'
import {FaFemale} from 'react-icons/fa'
import Users from './components/Users/Users';
import Pagination from './components/Pagination/Pagination'

function App() {
  // declare states to manage list of users displayed
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);

  useEffect(()=>{
    const fetchUsers = async () => {
      setLoading(true);
      // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const res = await axios.get('https://randomuser.me/api/?results=10');
      setUsers(res.data.results);
      console.log(res.data.results)
      setLoading(false);
    }

    fetchUsers();
  },[]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  return (
    <div className="App">
      <div className="dashboard-container">
      <div className="dashboard">
        <h1>Hello, <b>Emerald</b></h1>
        <p className="welcome-message">Welcome to your dashboard, kindly sort through the user base</p>
        <div className="dashboard-search-bar">
          <FiSearch className="search-icon"/>
          <input placeholder="Find a user" />
        </div>
        <p className="users-control-header">Show Users</p>
        <div className="users-control-container">
          <div>
            <div className="control-icon" id="all-icon-container"><IoIosPeople /></div><p>All users</p>
          </div>
          <div>
            <div className="control-icon" id="male-icon-container"><BiMale /></div><p>Male users</p>
          </div>
          <div>
            <div className="control-icon" id="female-icon-container"><FaFemale /></div><p>Female users</p>
          </div>
        </div>
      </div>
      </div>
      <Users 
        users={currentUsers} 
        loading={loading}
        >
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} usersPerPage ={usersPerPage} totalUsers={users.length} />
      </Users>
    </div>
  );
}

export default App;
