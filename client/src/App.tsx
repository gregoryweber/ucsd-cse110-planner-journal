import React, { useEffect, useState } from "react";
import Login from "./Components/LoginSignUpPage/Login";
import SignUp from "./Components/LoginSignUpPage/SignUp";
import DisplayUI from "./Components/DisplayUI/DisplayUI";

const App: React.FC = () => {
  // const [showSignUp, setShowSignUp] = useState(false);
	@@ -15,10 +15,11 @@ const App: React.FC = () => {

  return (
    <div>
        <DisplayUI/>
    </div>
  );
};


export default App;