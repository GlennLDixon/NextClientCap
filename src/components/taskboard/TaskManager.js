const nextApiUrl = "http://localhost:8000"
const nextToken = `Token ${localStorage.getItem('token')}`

console.log(nextToken)

export const getAllTasks = () => {
    return fetch(`${nextApiUrl}/tasks`, {
        "headers": {
            "Authorization": nextToken
        }
    }).then(res => res.json())
}

export const getBoardTasks = () => {
    return fetch(`${nextApiUrl}/boardtasks`, {
        "headers": {
            "Authorization": nextToken
        }
    }).then(res => res.json())
}

export const getTasksById = (TaskId) => {
    return fetch(`${nextApiUrl}/tasks/${TaskId}`, {
        "headers": {
            "Authorization": nextToken
        }
    }).then(res => res.json())
}

export const getTasksByBoardId = (boardId) => {
    return fetch(`${nextApiUrl}/taskboards/${boardId}`, {
        "headers": {
            "Authorization": nextToken
        }
    })
        .then(res => res.json())
}

export const addTask = (newTask) => {
    return fetch(`${nextApiUrl}/tasks`, {
        "method": "POST",
        "headers": {
            "Authorization": nextToken,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    })
}

export const deleteTask = (id) => {
    return fetch(`${nextApiUrl}/tasks/${id}`, {
        "method": "DELETE",
        "headers": {
            "Authorization": nextToken
        }
    })
}

export const updateTask = (editedTask) => {
    return fetch(`${nextApiUrl}/tasks/${editedTask.id}`, {
        method: "PUT",
        headers: {
            "Authorization": nextToken,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedTask)
    }).then(data => data.json());
}