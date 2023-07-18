import { combineReducers } from 'redux';

// Define your initial state
const initialUserState = {
  username: '',
  email: '',
  position: '',
  dob:'',
  num:'',
};

// User reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
