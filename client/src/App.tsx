// src/App.tsx
import React, { useState } from "react";
import Login from "./Components/LoginSignUpPage/Login";
import SignUp from "./Components/LoginSignUpPage/SignUp";
import JournalPage from "./Components/JournalPage/Journal-Page";

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