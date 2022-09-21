const nextApiUrl = "http://localhost:8000"
const nextToken = `Token ${localStorage.getItem('token')}`

export const getAllBoards = () => {
    return fetch(`${nextApiUrl}/taskboards`, {
        "headers": {
            "Authorization": nextToken
        }
    }).then(res => res.json())
}

export const getBoardById = (id) => {
    return fetch(`${nextApiUrl}/taskboards/${id}`, {
        "headers": {
            "Authorization": nextToken
        }
    }).then(res => res.json())
}

export const addBoard = (newBoard) => {
    return fetch(`${nextApiUrl}/taskboards`, {
        "method": "POST",
        "headers": {
            "Authorization": nextToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBoard)
    })
}

export const updateBoard = (editBoard) => {
    return fetch(`${nextApiUrl}/taskboards/${editBoard.id}`, {
        method: "PUT",
        headers: {
            "Authorization": nextToken,
            "Content-type": "application/json"
        },
        body: JSON.stringify(editBoard)
    }).then(data => data.json())
}

export const deleteBoards = (id) => {
    return fetch(`${nextApiUrl}/taskboards/${id}`, {
        "method": "DELETE",
        "headers": {
            "Authorization": nextToken
        },
        body: JSON.stringify(id)
    })
}