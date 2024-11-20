import React, { useContext, useEffect, useState, useRef } from 'react';
import { TaskMenuContext } from '../../Components/TaskMenu/TaskMenuContext';
import ReminderPopup from './ReminderPopup';
import { Task } from '../../Types/TaskType';

const RemindersManager: React.FC = () => {
  const { tasks } = useContext(TaskMenuContext);
  const [activeReminderTasks, setActiveReminderTasks] = useState<Task[]>([]);
  const timersRef = useRef<{ [key: string]: NodeJS.Timeout }>({});

  useEffect(() => {
    // Clear existing timers
    Object.values(timersRef.current).forEach(clearTimeout);
    timersRef.current = {};

    const now = new Date();

    Object.entries(tasks).forEach(([dateKey, taskList]) => {
      taskList.forEach(task => {
        // Checks if task has reminder set & time defined
        if (task.isReminder && task.reminderTime !== undefined) {
          const reminderDateTime = getReminderDateTime(dateKey, task.start, task.reminderTime);
          const timeUntilReminder = reminderDateTime.getTime() - now.getTime();

          // Calcs time left until reminder should be triggered
          if (timeUntilReminder > 0) {
            const timerId = setTimeout(() => {
              setActiveReminderTasks(prev => [...prev, task]);
            }, timeUntilReminder);
            timersRef.current[`${dateKey}-${task.id}`] = timerId;
          } else if (reminderDateTime > now) {
            setActiveReminderTasks(prev => [...prev, task]);
          }
        }
      });
    });

    return () => {
      Object.values(timersRef.current).forEach(clearTimeout);
    };
  }, [tasks]);

  const handleCloseReminder = (taskId: number) => {
    setActiveReminderTasks(prev => prev.filter(task => task.id !== taskId));
  };

  return (
    <>
      {activeReminderTasks.map(task => (
        <ReminderPopup key={task.id} taskName={task.name} onClose={() => handleCloseReminder(task.id)} />
      ))}
    </>
  );
};

export default RemindersManager;

function getReminderDateTime(dateKey: string, startTime: string, reminderTime: number): Date {
  const [year, month, day] = dateKey.split('-').map(Number);
  const [time, period] = startTime.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  const taskDateTime = new Date(year, month - 1, day, hours, minutes);
  return new Date(taskDateTime.getTime() - reminderTime * 60 * 1000);
}
