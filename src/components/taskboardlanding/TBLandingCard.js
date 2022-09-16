import React from "react"

export const TBLandingCard = ({ handleDeleteBoard, board }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h4>{board.name}</h4>
                <button type="button" onClick={() => handleDeleteBoard(board.id)}>X</button>
            </div>
        </div>
    )
}