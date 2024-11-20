import React, { useCallback, useState } from "react";
import { Task } from "../../Types/TaskType";

//Create a context Type for the TaskMenu component
interface TaskMenuContextType {
    currentDate: Date | null;
    setCurrentDate: (date: Date | null) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    tasks: Record<string, Task[]>;
    setTasks: (tasks: Record<string, Task[]>) => void;
    addTask: (date: Date, task: Task) => void;
    removeTask: (date: Date, taskId: number) => void;
}

//Create a default object for the TaskMenuContext
const initialTaskMenu: TaskMenuContextType = {
    currentDate: null,
    setCurrentDate: () => {},
    isOpen: false,
    setIsOpen: () => {},
    tasks: {},
    setTasks: () => {},
    addTask: () => {},
    removeTask: () => {},
};

//Create a context for the TaskMenu component
export const TaskMenuContext = React.createContext<TaskMenuContextType>(initialTaskMenu);

//Create a provider for the TaskMenuContext
export const TaskMenuContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState<Date | null>(null);
    const [tasks, setTasks] = useState<Record<string, Task[]>>({});

    const addTask = useCallback((date: Date, task: Task) => {
        const dateKey = date.toISOString().split('T')[0];
        setTasks(prev => ({
            ...prev,
            [dateKey]: [...(prev[dateKey] || []), task]
        }));
    }, []);

    const removeTask = useCallback((date: Date, taskId: number) => {
        const dateKey = date.toISOString().split('T')[0];
        setTasks(prev => ({
            ...prev,
            [dateKey]: (prev[dateKey] || []).filter(task => task.id !== taskId)
        }));
    }, []);
    
    return (
        <TaskMenuContext.Provider value={{
            currentDate,
            setCurrentDate,
            isOpen,
            setIsOpen,
            tasks,
            setTasks,
            addTask,
            removeTask,
        }}>
            {children}
        </TaskMenuContext.Provider>
    );
};