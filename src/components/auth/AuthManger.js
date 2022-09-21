const nextApiUrl = "http://localhost:8000"
const nextToken = `Token ${localStorage.getItem('token')}`

export const loginUser = (user) => {
    return fetch(`${nextApiUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
    }).then(res => res.json())
}

export const registerUser = (newUser) => {
    return fetch(`${nextApiUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"

        },
        body: JSON.stringify(newUser)
    }).then(res => res.json())
}