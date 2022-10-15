import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CurrentTaskCard from "./CurrentTaskCard";
import TaskList from "./TaskList";
import { addTask, getTasksById, getAllTasks, getBoardTasks } from "./TaskManager";
import "./TaskBoardPage.css";
import moment from 'moment';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const TaskListPage = () => {
    const { taskboardId } = useParams()
    const history = useHistory()
    const [task, setTask] = useState({
        task: "",
        dateCreated: moment().format("YYYY-MM-DD"),
        isCompleted: false,
        timeStamp: "00:00:00",
        board_id: taskboardId
    });
    const [taskList, setTaskList] = useState([])



    const changeState = (event) => {
        const newTask = { ...task }
        let selectedVal = event.target.value
        newTask[event.target.name] = selectedVal
        console.log(newTask)
        setTask(newTask)
    }

    const CreateNewTask = (event) => {
        event.preventDefault()
        console.log(task)
        addTask(task).then(() => history.push(`/tasklistpage/${taskboardId}`))
    }

    useEffect(() => {
        getTasksById(taskboardId).then(task => {
            setTaskList(task)
            // setIsLoading(false)
        })
    }, [])

    return (
        <div className="taskBoardPageContainer">
            {/* <div className="currentTaskBoardContainer">
                <h1>{thisTask.task}, {thisTask.dateCreated}</h1>
            </div> */}
            {/* <hr id="line-break" /> */}
            <div id="bottom-half-container">
                <div id="input-and-button-column">
                    <div id="input-and-button-wrapper">
                        <input type="text" name="task" className="taskform_input" onChange={changeState} value={task.task} />
                        <div id="button-container">
                            <button id="add-new-task-button" onClick={CreateNewTask}>Add New Task</button>
                        </div>
                    </div>
                </div>
                <TaskList
                    tasks={taskList}
                    taskboardId={taskboardId}
                />
            </div>
        </div>
    );
};