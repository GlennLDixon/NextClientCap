import React from "react"
import { Route, useRoutes, Navigate, Link } from "react-router-dom"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import "./ApplicationViews.css"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Link to="/login" />
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("next_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("next_user") !== null)
    }

    return (
        <div className="landingPageContainer">
            <div className="landingLeftContent">
                <h1>Hello World</h1>
            </div>
            <div className="landingRightContent">
                <h1>Hello World</h1>
            </div>

        </div>
    )
}