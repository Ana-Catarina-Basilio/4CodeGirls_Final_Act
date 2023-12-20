
export const setShowWelcome = (status) => ({
  type: 'SET_SHOW_WELCOME',
  payload: status,
});

export const login = (username) => ({
  type: 'LOGIN',
  payload: username,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: error,
});

export const clearError = () => ({
  type: 'CLEAR_ERROR',
});

export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  payload: username,
});

export const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  payload: password,
});

export const setLoginStatus = (status) => ({
  type: 'SET_LOGIN_STATUS',
  payload: status,
});

export const setClearError = () => ({
  type: 'CLEAR_ERROR',
});


export const storeEventDetails =(details)=>({ 
  type: 'STORE_EVENT_DETAILS',
  payload: details,
})

