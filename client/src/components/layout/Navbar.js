import React, {useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import  TaskContext from '../../context/task/taskContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const taskContext = useContext(TaskContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearTasks } = taskContext;

  const onLogout = () => {
    logout();
    clearTasks();
  };

  const authLinks = (
    <div className="navButtons">
     <li>
        <Link to='/about'  style={{color: "#666"}}>About</Link>
      </li>
      <Link to="/profile"><li> <i className="fas fa-user icon"> </i>{user && user.name}</li></Link> 
       <Link to="/"><li> <i className="fas fa-home icon"> </i>Home</li></Link> 
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </div>
    
  );

  const guestLinks = (
    <div className="navButtons">
     <li>
        <Link to='/about'  style={{color: "#666"}}>About</Link>
      </li>
      <li>
        <Link to='/register' style={{color: "#666"}} >Register</Link>
      </li>
      <li>
        <Link to='/login'  style={{color: "#666"}} >Login</Link>
      </li>
    </div>
  );

  return (
    <div className='navbar'>
      <h1 id="title"> 
        <Link to="/"><img src="https://res.cloudinary.com/erivasf/image/upload/v1570607667/Task/de2ptqtoylvkpdbbcjgg.png" alt="Task" style={{width:"7.5vw"}} /></Link> Task.
      </h1>
      <ul className="btns">{isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};



export default Navbar;
