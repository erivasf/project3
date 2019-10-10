import React, { useReducer } from 'react';
import axios from 'axios';
import ProfileContext from './profileContext';
import profileReducer from './ProfileReducer';
import {GET_PROFILE, UPDTAE_PROFILE, PROFILE_ERROR} from '../types';

const ProfileState = props => {
  const initialState = {
    current: null,
    error: null
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);


  // Get profile from an specific user

  const getProfile = async () => {
    try {
      const res = await axios.get('/api/profile');
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };


  // Update Profile

  const updateProfile = async profile => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/profile/${profile._id}`,
        profile,
        config
      );

      dispatch({
        type: UPDTAE_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.msg
      });
    }
  };
  return (
    <ProfileContext.Provider
      value={{
        current: state.current,
        error: state.error,
        getProfile,
        updateProfile
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default TaskState;
