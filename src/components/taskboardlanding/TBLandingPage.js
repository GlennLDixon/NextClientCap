import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { TBLandingList } from "./TBLandingList"
import { addBoard, getBoardById } from "./BoardManager"
import { getTasksById } from "../taskboard/TaskManager";
import "./Landing.css"

export const TaskBoardLandingPage = () => {
    const [board, setBoard] = useState({
        name: ""
    })

    const navigate = useHistory();
    const { taskId } = useParams()

    const changeState = (event) => {
        const newBoard = { ...board }
        let selectedVal = event.target.value
        // if (event.target.id.includes("name")) {
        //     selectedVal = parseInt(selectedVal)
        // }
        newBoard[event.target.name] = selectedVal
        setBoard(newBoard)
    }

    useEffect(() => {
        // getTasksById(taskId).then(task => {

        // })
    })

    const createNewBoard = (event) => {
        event.preventDefault()
        addBoard(board).then(() => navigate.push("/taskboardlandingpage"))
    }

    return (
        <div className="taskBoardPageContainer">
            <div className="taskBoardBtnHeader">
                <input type="text"
                    id="name"
                    name="name"
                    placeholder="New Board"
                    required autoFocus autoComplete="off"
                    className="taskform_input"
                    onChange={changeState}
                    value={board.name} />
                <button className="NewBoardBtn" onClick={createNewBoard}>Create New Board</button>
            </div>
            <div className="TaskBoardsList">
                <h1>Board List</h1>
                <TBLandingList />
            </div>
        </div>
    )
}