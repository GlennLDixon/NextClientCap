const nextApiUrl = "http://localhost:8000"
const nextToken = `Token ${localStorage.getItem('token')}`

console.log(nextToken)

export const getAllTasks = () => {
    return fetch(`${nextApiUrl}/tasks`, {
        "method": "GET",
        "headers": {
            "Authorization": nextToken
        }
    })
}