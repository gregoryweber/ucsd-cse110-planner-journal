import React, { useContext, useState } from "react";
import "./TaskMenu.css";
import { Task } from "../../Types/TaskType";
import { DayObjectContext } from "../DayObject/DayObjectContext";

const TaskMenu: React.FC = () => {

  const context = useContext(DayObjectContext);

  const [taskName, setTaskName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [isReminder, setIsReminder] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    context.setTasks([...context.tasks, {
      id: context.tasks.length + 1,
      name: taskName,
      start: startTime,
      end: endTime
    }]);
  };

  return (
    <div className="task-menu-container">
      <h1 className="task-menu-title">Create Task/Event</h1>
      <form className="task-menu-form" onSubmit={handleSubmit}>
        <label className="task-menu-label">Task Name</label>
        <input
          className="task-menu-input"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <label className="task-menu-label">Task Start Time</label>
        <input
          className="task-menu-input"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />

        <label className="task-menu-label">Task End Time</label>
        <input
          className="task-menu-input"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />

        <div className="reminder-section">
          <label className="task-menu-label">Reminder Time</label>
          <select
            className="task-menu-select"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}>
            <option value="">Select time</option>
            <option value="5">5 minutes before</option>
            <option value="10">10 minutes before</option>
            <option value="30">30 minutes before</option>
          </select>
          <div className="checkbox-icon">
            <input
              type="checkbox"
              checked={isReminder}
              onChange={() => setIsReminder(!isReminder)}
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskMenu;
