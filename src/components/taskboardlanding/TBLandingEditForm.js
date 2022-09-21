import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";
import { getBoardById, updateBoard } from "./BoardManager"
import moment from "moment"
// import "./TaskForm.css"

export const LandingEditForm = () => {
    const [board, setBoard] = useState({
        name: "",
        user: localStorage.getItem('token')
    });
    const [isLoading, setIsLoading] = useState(false);

    const { boardId } = useParams();
    const navigate = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...board };
        stateToChange[evt.target.id] = evt.target.value;
        setBoard(stateToChange);
    };

    const updateExistingBoard = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedBoard = {
            id: boardId,
            user: board.user,
            name: board.name,
        };

        updateBoard(editedBoard)
            .then(() => navigate("/basks")
            )
    }

    useEffect(() => {
        getBoardById(boardId)
            .then(board => {
                setBoard(board);
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
                            id="name"
                            value={board.name}
                        />
                        <label htmlFor="name">Board name</label>

                    </div>

                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingBoard}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}