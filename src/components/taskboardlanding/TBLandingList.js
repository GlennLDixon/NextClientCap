import React, { useEffect, useState } from "react"
import { TBLandingCard } from "./TBLandingCard"
import { getAllBoards, deleteBoards, getBoardsById } from "./BoardManager"
import { useParams, useNavigate } from "react-router-dom"

export const TBLandingList = () => {
    const [boards, setBoards] = useState([])

    const getBoards = () => {
        return getAllBoards().then(boardsFromApi => {
            setBoards(boardsFromApi)
        })
    }

    console.log(boards)

    const { boardId } = useParams()

    const handleDeleteBoard = id => {
        deleteBoards(id)
            .then(() => getAllBoards()
                .then(setBoards))
    }

    useEffect(() => {
        getBoards();
    }, [])

    // useEffect(() => {
    //     getBoardsById(boardId).then(boards => {
    //         console.log(boards)
    //         set
    //     })
    // })

    return (
        <>
            <div className="container-cards">
                {boards.map(board =>
                    <TBLandingCard
                        key={board.id}
                        board={board}
                        handleDeleteBoard={handleDeleteBoard}
                    />)}
            </div>
        </>
    )
}