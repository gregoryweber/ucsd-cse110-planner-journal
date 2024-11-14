import React, { useEffect, useState } from "react";
import Login from "./Components/LoginSignUpPage/Login";
import SignUp from "./Components/LoginSignUpPage/SignUp";
import DisplayUI from "./Components/DisplayUI/DisplayUI";

const App: React.FC = () => {
  // const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
        <DisplayUI/>
    </div>
  );
};


export default App;