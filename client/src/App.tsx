// src/App.tsx
import React, { useState } from "react";
import Login from "./Components/LoginSignUpPage/Login";
import SignUp from "./Components/LoginSignUpPage/SignUp";
import DisplayUI from "./Components/DisplayUI/DisplayUI";

const App: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
        <DisplayUI/>
    </div>
  );
};


export default App;