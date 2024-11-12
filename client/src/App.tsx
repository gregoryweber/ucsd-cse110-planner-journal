import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/LoginSignUpPage/Login';
import SignUp from './Components/LoginSignUpPage/SignUp';
import MonthChangeButton from './Components/MonthChangeButton/monthChangeButton';


const App = () =>  {
// src/App.tsx
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

}
export default App;
//function App() {
  //return (
    //null
  //);
//}

//const App = () => {
  //return (
 
      //<div>
     //<MonthChangeButton/>
    //</div>
  //);
// };
