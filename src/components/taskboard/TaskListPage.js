import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CurrentTaskCard from "./CurrentTaskCard";
import TaskList from "./TaskList";
import { addTask, getTasksById } from "./TaskManager";
import "./TaskBoardPage.css";
import moment from 'moment';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const TaskListPage = () => {
    const history = useHistory()
    const [task, setTask] = useState({
        task: "",
        dateCreated: moment().format("YYYY-MM-DD"),
        isCompleted: false,
        timeStamp: "00:00:00"
    });
    const [taskList, setTaskList] = useState([])
    // const [isLoading, setIsLoading] = useState(false);

    const { taskboardId } = useParams()

    const changeState = (event) => {
        const newTask = { ...task }
        let selectedVal = event.target.value
        // if (event.target.name.includes("name")) {
        //     selectedVal = parseInt(selectedVal)
        // }
        newTask[event.target.name] = selectedVal
        setTask(newTask)
    }

    const CreateNewTask = (event) => {
        event.preventDefault()
        console.log(task)
        addTask(task)
        // .then(() => history.pushState("/taskboardpage/:id"))
    }

    useEffect(() => {
        console.log("taskboardId", taskboardId)
        getTasksById(taskboardId).then(task => {
            setTaskList(task)
            console.log(task)
            // setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        console.log(taskList)
        console.log(`hello ${task}`, task)
    }, [task])

    return (
        <div className="taskBoardPageContainer">
            {/* <div className="currentTaskBoardContainer">
                <h1>{thisTask.task}, {thisTask.dateCreated}</h1>
            </div> */}
            {/* <hr id="line-break" /> */}
            <div id="bottom-half-container">
                <div id="input-and-button-column">
                    <div id="input-and-button-wrapper">
                        <input type="text" name="task" className="taskform_input" onChange={changeState} />
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