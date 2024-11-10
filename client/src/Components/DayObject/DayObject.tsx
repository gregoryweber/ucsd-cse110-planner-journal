import { useContext, useEffect } from "react";
import { DayObjectContext} from "./DayObjectContext";
import './DayObjectStyle.css';
import TaskMenu from "../TaskMenu/TaskMenu";
import { Task } from "../../Types/TaskType";
import JournalPage from "../JournalEntry/Journal-Page";

interface DayObjectProps {
    currentDate: Date;
}

//Create a DayObject component that will be used to display the tasks for that date
const DayObject = ({currentDate}: DayObjectProps) => {

    const context = useContext(DayObjectContext);
    
    context.setCurrentDate(currentDate);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        // try {
        //     const taskList = await fetchTasks(currentDate);
        //     context.setTasks(taskList);
        // } catch (err: any) {
        //     console.log(err.message);
        // }

        context.setTasks([
            {
                id: 1,
                name: "Task 1",
                start: "8:00 AM",
                end: "9:00 AM"
            },
            {
                id: 2,
                name: "Task 2",
                start: "9:00 AM",
                end: "10:00 AM"
            },
            {
                id: 3,
                name: "Task 3",
                start: "10:00 AM",
                end: "11:00 AM"
            },
            {
                id: 4,
                name: "Task 4",
                start: "11:00 AM",
                end: "12:00 PM"
            },
            {
                id: 5,
                name: "Task 5",
                start: "12:00 PM",
                end: "1:00 PM"
            },
            {
                id: 6,
                name: "Task 6",
                start: "1:00 PM",
                end: "2:00 PM"
            },
            {
                id: 7,
                name: "Task 7",
                start: "2:00 PM",
                end: "3:00 PM"
            },
            {
                id: 8,
                name: "Task 8",
                start: "3:00 PM",
                end: "4:00 PM"
            },
            {
                id: 9,
                name: "Task 9",
                start: "4:00 PM",
                end: "5:00 PM"
            },
            {
                id: 10,
                name: "Task 10",
                start: "5:00 PM",
                end: "6:00 PM"
            }

        ]);
    }

    return (
        <div>
            <div className="dayObject">
                <div className="dayObject__header">
                    <div className="dayObject__header__date">{currentDate.getDate()}</div>
                </div>
                <div className="dayObject__tasks">
                    <DisplayTasks/>
                </div>
                <AddTaskButton/>
                <JournalEntryButton/>
            </div>
        </div>
    );
}

export default DayObject;

//Create a button component that will be used to add a task to DayObject
const AddTaskButton = () => {
    const handleClick = () => {
        <TaskMenu/>
    };

    return (
        <div>
            <button className="addTaskButton" onClick={handleClick}>+</button>
        </div>
    );
}

//Create a button component that will be used to add a journal entry to DayObject
const JournalEntryButton = () => {
    const handleClick = () => {
        <JournalPage/>
    };

    return (
        <div>
            <button className="journalEntryButton" onClick={handleClick}>Journal</button>
        </div>
    );
}

//Create a component that will display the tasks for the current date
const DisplayTasks = () => {
    const context = useContext(DayObjectContext);
    
    return (
        <div>
            {context.tasks.map((task) => (
                <TaskItem task={task} />
            ))}
        </div>
    );
}

//Props for TaskItem component
interface TaskItemProps {
    task: Task;
}

//Create a component that will display a single task
const TaskItem = ({task}: TaskItemProps) => {
    const context = useContext(DayObjectContext);
    
    const handleClick = () => {
        context.setTasks(context.tasks.filter((t) => t.id !== task.id));
    }

    return (
        <div>
            <div className="taskItem">
                <div className="taskItem__name">{task.name}</div>
                <button className="taskItem__deleteButton" onClick={handleClick}>x</button>
                <div className="taskItem__description">{task.start} - {task.end}</div>
            </div>
        </div>
    );
}