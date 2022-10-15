import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { updateTask, getAllTasks, addTask } from "./TaskManager";
import "./TaskListCard.css";
import { getAllBoards } from "../taskboardlanding/BoardManager";
import { createSharedTask } from "./TaskManager";
import { useCallback } from "react";

const TaskListCard = ({ task, handleDeleteTask, taskBoardId }) => {
    const [currentTask, setCurrentTask] = useState({});
    const [tasks, setTasks] = useState([])
    const [boards, setBoards] = useState([])
    const isCompleted = currentTask.isCompleted ? "done" : "not-completed"

    const [newTask, setNewTask] = useState({
        task: task.id,
        taskBoard: taskBoardId
    })

    const getTasks = () => {
        return getAllTasks().then(tasksFromApi => {
            setTasks(tasksFromApi)
        })
    }

    useEffect(() => {
        getTasks()
    }, [])

    const getUserBoards = () => {
        return getAllBoards().then(boardsFromApi => {
            setBoards(boardsFromApi)
        })
    }

    useEffect(() => {
        getUserBoards()
    }, [])


    const toggleCompletion = (task) => {
        const editedTask = Object.assign(task, {
            isCompleted: task.isCompleted ? false : true,
        });
        updateTask(editedTask);
        setCurrentTask(editedTask);
    };

    const handleInput = useCallback((e) => {
        e.preventDefault()
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value,
        })
    }, [setNewTask])

    const handleAddTaskClicked = () => {
        createSharedTask(newTask)
    }

    const handleAddTaskToBoard = (event) => {
        event.preventDefault()
        addTask(task)
    }

    useEffect(() => {
        setCurrentTask(task);
    }, [currentTask])


    return (
        <div className="tasklistcard-container">
            <div className="tasklistcard-content">
                <div className="tasklistcard-header">
                    <p className="tasklistcard-task">{currentTask.task}</p>
                    <form className="tasklistcard-form">
                        <fieldset>
                            <div className="form-group">
                                {/* <input name="task" onInput={handleInput} /> */}
                                <select value={boards.id} className="tasklistcard-select" name="taskBoard" onInput={handleInput}>
                                    <option className="tasklistcard-dropdown">Select board</option>
                                    {
                                        boards.map((board) => <option value={board.id}>{board.name}</option>
                                        )}
                                </select>
                            </div>
                        </fieldset>
                    </form>
                </div>

                <div className="tasklistcard-button-section">
                    <button className="tasklistcard-btn share-btn" type="button" onClick={() => handleAddTaskClicked(task.id)}>Add Task</button>
                    <Link to={`${currentTask.id}/edit`}>
                        <button className="tasklistcard-btn">Edit</button>
                    </Link>
                    {
                        currentTask.isCompleted ?
                            (
                                <button className="tasklistcard-btn undo-btn" type="button" onClick={() => toggleCompletion(task)}>Undo</button>
                            ) :
                            (
                                <button className="tasklistcard-btn completed-btn" type="button" onClick={() => toggleCompletion(task)}>Done</button>
                            )
                    }
                    <button className="tasklistcard-btn delete-btn" type="button" onClick={() => handleDeleteTask(task.id)}>X</button>
                </div>

            </div>
        </div>
    )
};

export default TaskListCard;