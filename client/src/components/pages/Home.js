import React, { useContext, useEffect } from 'react';
import AllTasks from '../tasks/AllTasks'
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <AllTasks/>
    </div>
  );
};

export default Home;
