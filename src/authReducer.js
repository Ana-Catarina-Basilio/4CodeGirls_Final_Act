// authReducer.js
const initialState = {
  isLoggedIn: false,
  username: '',
  error: '',
  showWelcome: false, 
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
        error: '',
      }; 
      
      case 'SET_SHOW_WELCOME':
      return {
        ...state,
        showWelcome: action.payload,
      };
    case 'LOGOUT':
      return initialState;
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: '',
      };
   
    default:
      return state; // Add a default case to return the state if the action type is not recognized
  }
};

export default authReducer;