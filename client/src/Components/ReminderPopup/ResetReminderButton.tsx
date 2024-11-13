import React, { useState, useEffect } from 'react';
import './ResetReminderButton.css'

const ResetReminderButton: React.FC = () => {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const checkMutedStatus = () => {
      const isMuted = localStorage.getItem('reminderMuted') === 'true';
      setMuted(isMuted);
    };

    checkMutedStatus();
    window.addEventListener('unmute', checkMutedStatus);
    window.addEventListener('storage', checkMutedStatus);

    return () => {
      window.removeEventListener('unmute', checkMutedStatus);
      window.removeEventListener('storage', checkMutedStatus);
    };
  }, []);

  const handleReset = () => {
    localStorage.removeItem('reminderMuted');
    window.dispatchEvent(new Event('unmute'));
  };

  if (!muted) return null;

  return (
    <button className="reset-reminder-button" onClick={handleReset}>
      Reset Reminder
    </button>
  );
};

export default ResetReminderButton;
