// src/App.tsx
import React, { useState } from "react";
import Login from "./components/LoginSignUpPage/Login";
import SignUp from "./components/LoginSignUpPage/SignUp";
import JournalPage from "./components/Journal-Page";

const App: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <JournalPage />
    // <div className="center-container">
    //   {showSignUp ? (
    //     <SignUp goToLogin={() => setShowSignUp(false)} />
    //   ) : (
    //     <Login goToSignUp={() => setShowSignUp(true)} />
    //   )}
    // </div>
  );
};


export default App;