// src/Login.tsx
import React, { useContext } from 'react';
import './Auth.css';
import { AccountContext } from './AccountContext';

interface LoginProps {
  setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setShowSignUp }) => {
  const accountContext = useContext(AccountContext);

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); 

    //CHECK IF USERNAME AND PASSWORD ARE VALID HERE
    
    accountContext.setUsername(username);
    accountContext.setPassword(password);
    accountContext.setIsLoggedIn(true);
  };
  
  return (
    <div className="auth-container">
      <h2>Log In</h2>
      {/* i added onSumbit to this form */}
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit">Log In</button>
        <p className="link">
          Don’t have an account? <span onClick={() => setShowSignUp(true)} className="link-button">Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
