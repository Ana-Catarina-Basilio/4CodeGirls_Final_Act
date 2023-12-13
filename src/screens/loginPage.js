import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './loginPage.css';
import * as authActions from '../authActions';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const correctPassword = "festive"; 

  const handleLogin = () => {
    if (password === correctPassword) {
      // Dispatch the login action with the entered username
      dispatch(authActions.login(username));
      navigate('/welcome')
    } else {
      // Password is incorrect, handle it accordingly (e.g., show an error)
      console.error('Incorrect password. Please try again.');
    }
  };
//error handling added later
  return (
    <div className="loginContainer">
      <h1 className="welcome-heading">To discover what lies behind</h1>
      <h3>Type in your name and the secret password!</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="secret code, psst f_st_ve"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
