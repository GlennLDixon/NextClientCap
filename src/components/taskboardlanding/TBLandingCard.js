import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom"

export const TBLandingCard = ({ handleDeleteBoard, board }) => {
    return (
        <Link to={`/taskboardpage/${board.id}`}>
            <div className="card">
                <div className="card-content">
                    <h4>{board.name}</h4>
                    <button type="button" onClick={() => handleDeleteBoard(board.id)}>X</button>
                </div>
            </div>
        </Link >
    )
}