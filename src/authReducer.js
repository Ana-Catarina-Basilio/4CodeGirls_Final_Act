// authReducer.js
const initialState = {
  isLoggedIn: false,
  username: '',
  error: '',
  showWelcome: false, 
  eventDetails: [],
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
      case 'STORE_EVENT_DETAILS':
      return {
        ...state,
        eventDetails: [ action.payload],
      };
      case 'UPDATE_BOOKING_DETAILS':
      return {
        ...state,
        bookingDetails: action.payload,
      };

    default:
      return state; // Add a default case to return the state if the action type is not recognized
  }
};

export default authReducer;