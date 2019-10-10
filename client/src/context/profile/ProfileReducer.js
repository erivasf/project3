import {GET_PROFILE,UPDTAE_PROFILE} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case UPDTAE_PROFILE:
      return {
        ...state,
        profile: state.profile.map(prof =>
          prof._id === action.payload._id ? action.payload : prof
        ),
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
    return state;
  }
  }
};
