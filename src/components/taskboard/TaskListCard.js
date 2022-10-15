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
                <Link to={`${currentTask.id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button type="button" onClick={() => handleDeleteTask(task.id)}>X</button>
                <form className="playListForm">
                    <fieldset>
                        <div className="form-group">
                            {/* <input name="task" onInput={handleInput} /> */}
                            <select value={boards.id} name="taskBoard" onInput={handleInput}>
                                <option>Select board</option>
                                {
                                    boards.map((board) => <option value={board.id}>{board.name}</option>
                                    )}
                            </select>
                        </div>
                    </fieldset>
                </form>
                <button type="button" onClick={() => handleAddTaskClicked(task.id)}>Add Task</button>

            </div>
        </div>
    )
};

export default TaskListCard;