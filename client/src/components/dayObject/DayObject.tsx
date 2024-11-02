import { useEffect, useState } from "react";

//Crate a DayObject component that will be used to display the tasks for that date
const DayObject = (currentDate: Date) => {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const taskList = await fetchTasks(currentDate);
            setTasks(taskList);
        } catch (err: any) {
            console.log(err.message);
        }
    }

    return (
        <div>
            <div className="dayObject">
                <div className="dayObject__header">
                    <div className="dayObject__header__date">{currentDate.getDate()}</div>
                </div>
                <div className="dayObject__tasks">
                    <DisplayTasks />
                </div>
                <AddTaskButton setTasks={setTasks}/>
                <JournalEntryButton currentDate={currentDate}/>
            </div>
        </div>
    );
}

export default DayObject;

//Props for AddTaskButton component
interface AddTaskButtonProps {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

//Create a button component that will be used to add a task to DayObject
const AddTaskButton = ({setTasks}: AddTaskButtonProps) => {
    const handleClick = () => {
        <CreateTaskForm setTasks={setTasks} />
    };

    return (
        <div>
            <button className="addTaskButton" onClick={handleClick}>+</button>
        </div>
    );
}

//Props for JournalEntryButton component
interface JournalEntryButtonProps {
    currentDate: Date;
}

//Create a button component that will be used to add a journal entry to DayObject
const JournalEntryButton = ({currentDate}: JournalEntryButtonProps) => {
    const handleClick = () => {
        <Journal date={currentDate}/>
    };

    return (
        <div>
            <button className="journalEntryButton" onClick={handleClick}>Journal</button>
        </div>
    );
}

//Create a component that will display the tasks for the current date
const DisplayTasks = () => {
    return (
        <div>
            {tasks.map((task) => (
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
    handleClick = () => {
        setTasks(tasks.filter((t) => t.id !== task.id));
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