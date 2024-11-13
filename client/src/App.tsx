// src/App.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from "./Components/LoginSignUpPage/Login";
import SignUp from "./Components/LoginSignUpPage/SignUp";
import CalendarPage from "./Components/CalenderPage/Calendar-Page";

const App: React.FC = () => {
  // const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    // <div className="center-container">
    //   {showSignUp ? (
    //     <SignUp goToLogin={() => setShowSignUp(false)} />
    //   ) : (
    //     <Login goToSignUp={() => setShowSignUp(true)} />
    //   )}
    // </div>
    <BrowserRouter>
    {isLoggedIn ? (
      <CalendarPage onLogout={() => setIsLoggedIn(false)} />
    ) : isSigningUp ? (
      <SignUp goToLogin={() => setIsSigningUp(false)} />
    ) : (
      <Login goToSignUp={() => setIsSigningUp(true)} onLogin={handleLogin} />
    )}
  </BrowserRouter>
  );
};


export default App;