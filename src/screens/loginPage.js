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
  // change username to sentence case

  const formattedName = username.charAt(0).toUpperCase() + username.slice(1);


  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (!username || !password) {
      alert('Please fill in both name and password.');
      return;
    }
    if (!/^[a-zA-Z]+$/.test(username)) {
      alert('Please enter a name using alphabetical characters only.');
      return;
    }

    // Validate password and convert to lowercase
    const lowerCasePassword = password.toLowerCase();
    if (lowerCasePassword !== correctPassword) {
      alert('Wrong password! Please try again. Psst: f_stive');
      return;
    }

    // Dispatch the login action with the entered username
    dispatch(authActions.login(formattedName));
    navigate('/welcome');
  };

  return (
    <div className="login-container">
      <h1 className="welcome-heading">To discover what lies behind</h1>
      <h3>Type in your name and the secret password!</h3>
      <form onSubmit={handleLogin}>
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
        <button className ="submitLoginButton" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
