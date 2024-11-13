// src/App.tsx
import React from "react";
import ResetReminderButton from "./Components/ReminderPopup/ResetReminderButton";
import ReminderPopup from "./Components/ReminderPopup/ReminderPopup";

const App: React.FC = () => {
  return (
    <div>
      <ReminderPopup />
      <ResetReminderButton />
    </div>
  );
};

export default App;
