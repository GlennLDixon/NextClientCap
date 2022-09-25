import React from "react";
import "./CurrentTaskCard.css";

const CurrentTaskCard = ({ thisTask }) => {
    console.log(thisTask)
    return (
        <div className="current-task-card">
            <h1>{thisTask.task}</h1>
        </div>
    );
};

export default CurrentTaskCard;