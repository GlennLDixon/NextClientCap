const nextApiUrl = "http://localhost:8000"
const nextToken = `Token ${localStorage.getItem('token')}`

export const getAllBoards = () => {
    return fetch(`${nextApiUrl}/taskboards`, {
        "headers": {
            "Authorization": nextToken
        }
    }).then(res => res.json())
}

export const getBoardsById = (id) => {
    return fetch(`${nextApiUrl}/taskboards/${id}`, {
        "headers": {
            "Authorization": nextToken
        }
    }).then(res => res.json())
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