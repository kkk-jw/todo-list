import React, {FC, ChangeEvent, useState, changeEvent} from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);

    const handlechange = (event : ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    };

    const taskChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setTask(event.target.value);
      console.log(event.target.value)
    };

    const deadlineChange = (event : changeEvent<HTMLInputElement>): void => {
        setDeadline(Number(event.target.value));
        console.log(event.target.value)
    };

    return (
    <div className="App">
        <div className="header">
            <div className="inputContainer">
                <input
                    type="text"
                    placeholder="Task..."
                    name="task"
                    value={task}
                    onChange={taskChange}
                />
                <input
                    type="number"
                    placeholder="Deadline (in Days)..."
                    name="deadline"
                    value={deadline}
                    onChange={deadlineChange}
                />
            </div>
            <button> Add Task </button>
        </div>
        <div className="todolist">
        </div>
    </div>
    );
};

export default App;