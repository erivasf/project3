import {GET_PROFILE,UPDATE_PROFILE, PROFILE_ERROR, ADD_PROFILE} from '../types';

export default (state, action) => {
  switch (action.type) {
     case ADD_PROFILE:
      return {
        ...state,
        profile: [action.payload, ...state.profile],
        loading: false
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case UPDATE_PROFILE:
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

