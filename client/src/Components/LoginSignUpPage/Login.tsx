// src/Login.tsx
import React from 'react';
import './Auth.css';

interface LoginProps {
  goToSignUp: () => void;
}

const Login: React.FC<LoginProps> = ({ goToSignUp }) => {
  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <form>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Log In</button>
        <p className="link">
          Don’t have an account? <span onClick={goToSignUp} className="link-button">Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
