import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom"

export const TBLandingCard = ({ handleDeleteBoard, board }) => {
    return (
        <div className="card">
            <div className="card-content">
                <Link to={`/taskboardpage/${board.id}`}>
                    <h4>{board.name}</h4>
                </Link >
                <button type="button" onClick={() => handleDeleteBoard(board.id)}>X</button>
                <Link to={`taskboardlandingpage/${board.id}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    )
}