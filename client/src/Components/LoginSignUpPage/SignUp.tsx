// src/SignUp.tsx
import React from 'react';
import './Auth.css';

interface SignUpProps {
  goToLogin: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ goToLogin }) => {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <div className="input-container">
          <label htmlFor="createUsername">Create Username</label>
          <input type="text" id="createUsername" name="createUsername" />
        </div>
        <div className="input-container">
          <label htmlFor="createPassword">Create Password</label>
          <input type="password" id="createPassword" name="createPassword" />
        </div>
        <button type="submit">Create Account</button>
      </form>
      <p className="link">
        <span onClick={goToLogin} className="link-button">Back to Log In</span>
      </p>
    </div>
  );
};

export default SignUp;
