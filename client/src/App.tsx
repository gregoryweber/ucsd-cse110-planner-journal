// src/App.tsx
import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

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
