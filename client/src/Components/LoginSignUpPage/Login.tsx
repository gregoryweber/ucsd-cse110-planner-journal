// src/Login.tsx
import React from 'react';
import './Auth.css';

interface LoginProps {
  goToSignUp: () => void;
  // adding things sorryyy
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ goToSignUp, onLogin }) => {
  // what i added
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form from submitting the default way
    onLogin(); // Call the onLogin function to set isLoggedIn to true
  };
  // end of what i added

  return (
    <div className="auth-container">
      <h2>Log In</h2>
      {/* i added onSumbit to this form */}
      <form onSubmit={handleLogin}>
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
