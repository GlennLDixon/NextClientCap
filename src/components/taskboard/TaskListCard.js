import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { updateTask } from "./TaskManager";
import "./TaskListCard.css";

const TaskListCard = ({ task, handleDeleteTask }) => {
    const [currentTask, setCurrentTask] = useState({});
    const isCompleted = currentTask.isCompleted ? "done" : "not-completed"


    const toggleCompletion = (task) => {
        const editedTask = Object.assign(task, {
            isCompleted: task.isCompleted ? false : true,
        });
        updateTask(editedTask);
        setCurrentTask(editedTask);
    };

    useEffect(() => {
        setCurrentTask(task);
    }, [currentTask])


    return (
        <div className="card">
            <div className="card-content">
                <p className={isCompleted}>{currentTask.task}</p>
                {
                    currentTask.isCompleted ?
                        (
                            <button type="button" onClick={() => toggleCompletion(task)}>Undo</button>
                        ) :
                        (
                            <button type="button" onClick={() => toggleCompletion(task)}>Done</button>
                        )
                }
                <button type="button" onClick={() => handleDeleteTask(task.id)}>X</button>
                <Link to={`${currentTask.id}/edit`}>
                    <button>Edit</button>
                </Link>

            </div>
        </div>
    )
};

export default TaskListCard;