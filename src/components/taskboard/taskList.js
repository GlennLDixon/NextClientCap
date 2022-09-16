import React from "react";
import TaskListCard from "./TaskListCard";
import "./TaskList.css";

const arr = [1, 2, 3];

const TaskList = () => {
    return (
        <div id="task-list-container">
            <TaskListCard />
        </div>
    );
};

export default TaskList;