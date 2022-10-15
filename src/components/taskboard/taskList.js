import React, { useEffect, useState } from "react";
import TaskListCard from "./TaskListCard";
import "./TaskList.css";
import { getAllTasks, deleteTask, addTask, getBoardTasks } from "./TaskManager";

const TaskList = ({ tasks, taskboardId }) => {
    const [fetchedTasks, setFetchedTasks] = useState([])
    const [boards, setBoards] = useState([])
    let taskIds;
    // let boardId = taskboardId

    const getTasks = (listOfBoardTasks) => {
        console.log("Taskboard", listOfBoardTasks)
        return getAllTasks().then(tasksFromApi => {
            const filteredTasks = tasksFromApi.filter(({ id }) => (listOfBoardTasks || []).find(({ task }) => task === id))
            setFetchedTasks(filteredTasks)
        })
    }

    useEffect(() => {
        getBoardTasks().then(boardTasks => {
            const filteredBoardTasks = boardTasks.filter(({ taskBoard }) =>
                taskboardId == taskBoard

            )
            return getTasks(filteredBoardTasks)
        })
    }, []);

    console.log("tasks", fetchedTasks)
    const matchingBoards = boards.filter((board) => board.taskBoard == taskboardId);

    let itMatches = matchingBoards.forEach((board) => {
        fetchedTasks.filter(fetchTask => fetchTask.id === board.taskBoard).map(fetchedTask => fetchedTask.task)
    })

    console.log("Filter Boards", matchingBoards)



    const handleDeleteTask = id => {
        deleteTask(id)
            .then(() => getAllTasks()
                .then(setFetchedTasks))
    }

    useEffect(() => {
        getTasks()
    }, [])


    return (
        <div id="task-list-container">
            {fetchedTasks.map(task =>
                <TaskListCard
                    key={task.id}
                    task={task}
                    taskboardId={taskboardId}
                    handleDeleteTask={handleDeleteTask}
                />)}
        </div>
    );
};

export default TaskList;