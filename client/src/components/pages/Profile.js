import React, { useContext, useEffect } from 'react';
import Tasks from '../tasks/Tasks';
import TaskForm from '../tasks/TaskForm';
import TaskFilter from '../tasks/TaskFilter';
import AuthContext from '../../context/auth/authContext';

const Profile = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
    <div className = "upper">
      <h1 className="title text-center">Your profile</h1>
    </div>
    <div className='grid-2'>
      <div>
        <TaskForm />
      </div>
      <div>
        <TaskFilter />
        <Tasks />
      </div>
    </div>
    </div>
  );
};

export default Profile;
