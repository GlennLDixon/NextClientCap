import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";
import { getTaskById, updateTask } from "./TaskManager"
import moment from "moment"
// import "./TaskForm.css"

export const TaskEditForm = () => {
    const [task, setTask] = useState({
        name: "",
        dateCreated: moment().format("YYYY-MM-DD"),
        isCompleted: false,
        timeStamp: "00:00:00",
    });
    const [isLoading, setIsLoading] = useState(false);

    const { taskId } = useParams();
    const navigate = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...task };
        stateToChange[evt.target.id] = evt.target.value;
        setTask(stateToChange);
    };

    const updateExistingTask = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedTask = {
            id: taskId,
            task: task.task,
            dateCreated: task.dateCreated,
            isCompleted: task.isCompleted,
            timeStamp: task.timeStamp
        };

        updateTask(editedTask)
            .then(() => navigate("/tasks")
            )
    }

    useEffect(() => {
        getTaskById(taskId)
            .then(task => {
                setTask(task);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="task"
                            value={task.task}
                        />
                        <label htmlFor="name">Task name</label>

                    </div>

                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingTask}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}