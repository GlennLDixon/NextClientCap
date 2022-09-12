import React, { useEffect, useState } from "react"
import { TBLandingCard } from "./TBLandingCard"
// import { getMyBoards, deleteBoards } from
import { useParams, useNavigate } from "react-router-dom"

export const LandingList = () => {
    const [boards, setBoards] = useState([])

    const getBoards = () => {
        return getAllBoards().then(boardsFromApi => {
            setMessages(messagesFromApi)
        })
    }

    const { boardId } = useParams()

    const handleDeleteBoard = id => {
        handleDeleteBoard(id)
            .then(() => getAllBoards()
                .then(setBoards))
    }

    useEffect(() => {
        getBoards();
    }, [])

    return (
        <>
        </>
    )
}