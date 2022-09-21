import React, { useEffect, useState } from "react";
import TaskListCard from "./TaskListCard";
import "./TaskList.css";
import { getAllTasks, deleteTask } from "./TaskManager";

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return getAllTasks().then(tasksFromApi => {
            setTasks(tasksFromApi)
        })
    }

    console.log(tasks)

    const handleDeleteTask = id => {
        deleteTask(id)
            .then(() => getAllTasks()
                .then(setTasks))
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <div id="task-list-container">
            {tasks.map(task =>
                <TaskListCard
                    key={task.id}
                    task={task}
                    handleDeleteTask={handleDeleteTask}
                />)}
        </div>
    );
};

export default TaskList;