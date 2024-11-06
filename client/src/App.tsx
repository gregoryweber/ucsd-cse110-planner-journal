// src/App.tsx
import React, { useState } from "react";
import Login from "./Components/LoginSignUpPage/Login";
import SignUp from "./Components/LoginSignUpPage/SignUp";

const App: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="center-container">
      {showSignUp ? (
        <SignUp goToLogin={() => setShowSignUp(false)} />
      ) : (
        <Login goToSignUp={() => setShowSignUp(true)} />
      )}
    </div>
  );
};

export default App;
