import React from "react";
import { Link } from "react-router-dom"
import "./TaskListCard.css";

const TaskListCard = ({ task, handleDeleteTask }) => {
    return (
        <div className="card">
            <div className="card-content">
                <p>{task.task}</p>
                <button type="button" onClick={() => handleDeleteTask(task.id)}>X</button>
                <Link to={`${task.id}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    )
};

export default TaskListCard;