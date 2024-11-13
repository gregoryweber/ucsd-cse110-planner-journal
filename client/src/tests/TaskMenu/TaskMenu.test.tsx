import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskMenu from "../../Components/TaskMenu/TaskMenu";
import { TaskMenuContext } from "../../Components/TaskMenu/TaskMenuContext";
import { Task } from "../../Types/TaskType";

describe("TaskMenu Component", () => {
  beforeEach(() => {
    render(<TaskMenu />);
  });

  test("renders all input fields and submit button", () => {
    // Check for Task Name input
    const taskNameInput = screen.getByLabelText("Task Name");
    expect(taskNameInput).toBeInTheDocument();
    expect(taskNameInput).toHaveAttribute("type", "text");

    // Check for Start Time input
    const startTimeInput = screen.getByLabelText("Task Start Time");
    expect(startTimeInput).toBeInTheDocument();
    expect(startTimeInput).toHaveAttribute("type", "time");

    // Check for End Time input
    const endTimeInput = screen.getByLabelText("Task End Time");
    expect(endTimeInput).toBeInTheDocument();
    expect(endTimeInput).toHaveAttribute("type", "time");

    // Check for Reminder Time select
    const reminderTimeSelect = screen.getByLabelText("Reminder Time");
    expect(reminderTimeSelect).toBeInTheDocument();
    expect(reminderTimeSelect.tagName.toLowerCase()).toBe("select");

    // Verify reminder time options
    const reminderOptions = screen.getAllByRole("option");
    expect(reminderOptions).toHaveLength(4); // Including the default "Select time" option
    expect(reminderOptions[1]).toHaveValue("5");
    expect(reminderOptions[2]).toHaveValue("10");
    expect(reminderOptions[3]).toHaveValue("30");

    // Check for Submit button
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });

  test("Create Task", () => {
    const mockAddTask = jest.fn();
    render(
        <TaskMenuContext.Provider value={{ currentDate: new Date(2024, 10, 11), setCurrentDate: jest.fn(), isOpen: true, setIsOpen: jest.fn(), tasks: {}, addTask: mockAddTask, removeTask: jest.fn() }}>
            <TaskMenu />
        </TaskMenuContext.Provider>
    );

    const taskNameInput = screen.getByTestId('task-name-input'); 
    const startTimeInput = screen.getByTestId('task-start-time-input'); 
    const endTimeInput = screen.getByTestId('task-end-time-input');
    const submitButton = screen.getByTestId('task-submit-button');

    fireEvent.change(taskNameInput, { target: { value: 'New Task' } });
    fireEvent.change(startTimeInput, { target: { value: '10:00' } }); 
    fireEvent.change(endTimeInput, { target: { value: '23:00' } });

    fireEvent.click(submitButton);

    const newTask: Task = { 
      id: 1,
      name: "New Task",
      start: "10:00 AM",
      end: "11:00 PM"
    };
    expect(mockAddTask).toHaveBeenCalledWith(new Date(2024, 10, 11), newTask);
  });
});
