import React from 'react';
import ReminderPopup from './Components/ReminderPopup';

const App: React.FC = () => {
  const resetReminder = () => {
    localStorage.removeItem('reminderMuted');
    // Unmutes
    window.dispatchEvent(new Event('unmute'));
  };

  return (
    <div>
      <ReminderPopup />
      <button onClick={resetReminder} style={resetButtonStyle}>
        Unmute
      </button>
    </div>
  );
};

const resetButtonStyle: React.CSSProperties = {
  marginTop: '20px',
};

export default App;
