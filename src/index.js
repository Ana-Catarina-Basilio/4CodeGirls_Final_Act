import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import authReducer from './authReducer';
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './App';

const store = createStore(authReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
