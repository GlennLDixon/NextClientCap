import React, { useEffect, useState } from "react";
import TaskListCard from "./TaskListCard";
import "./TaskList.css";
import { getAllTasks, deleteTask, getTaskByBoardId, updateTask, getBoardTasks } from "./TaskManager";

const TaskList = ({ tasks, taskboardId }) => {
    const [newTasks, setNewTasks] = useState([])
    const [boards, setBoards] = useState([])
    const [boardTask, setBoardTask] = useState([])

    const getTasks = () => {
        return getAllTasks().then(tasksFromApi => {
            setNewTasks(tasksFromApi)
        })
    }

    // boards.map(board => {
    //     if (board.taskBoard === taskboardId) {
    //         console.log("test", board.task)
    //     }
    // })

    console.log("tasks", newTasks)

    console.log("test", boards)
    console.log(newTasks.map(task => {
        console.log("test", task.task)
    }))

    console.log(boards.map(board => {
        console.log("test", board.task)
        console.log("boardId", board.taskBoard)
        if (board.taskBoard === taskboardId) {
            console.log(board.task)
        }
    }))

    const handleDeleteTask = id => {
        deleteTask(id)
            .then(() => getAllTasks()
                .then(setNewTasks))
    }

    useEffect(() => {
        getTasks()
    }, [])


    useEffect(() => {
        getBoardTasks().then(boardTasks => {
            setBoards(boardTasks)
        })
    }, [])

    return (
        <div id="task-list-container">
            {newTasks.map(task =>
                <TaskListCard
                    key={task.id}
                    task={task}
                    handleDeleteTask={handleDeleteTask}
                />)}
        </div>
    );
};

export default TaskList;