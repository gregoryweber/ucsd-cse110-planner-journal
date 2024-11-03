import React from "react";
import { Task } from "./DayObject";

//Create a context Type for the DayObject component
interface DayObjectContextType {
    currentDate: Date | null;
    setCurrentDate: React.Dispatch<React.SetStateAction<Date | null>>;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

//Create a default object for the DayObjectContext
const initialDayObject: DayObjectContextType = {
    currentDate: null,
    setCurrentDate: () => {},
    tasks: [],
    setTasks: () => {}
};

//Create a context for the DayObject component
export const DayObjectContext = React.createContext<DayObjectContextType>(initialDayObject);

//Create a provider for the DayObjectContext
export const DayObjectContextProvider = (props: any) => {
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [currentDate, setCurrentDate] = React.useState<Date | null>(null);

    return (
        <DayObjectContext.Provider value={{currentDate, setCurrentDate, tasks, setTasks}}>
            {props.children}
        </DayObjectContext.Provider>
    );
}