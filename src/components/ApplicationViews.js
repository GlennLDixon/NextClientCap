import React from "react"
import { Route, Routes, Navigate, Link } from "react-router-dom"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import "./ApplicationViews.css"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min"
import { TaskBoardLandingPage } from "./taskboardlanding/TBLandingPage"
import { Home } from '../home'

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Link to="/login" />
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("next_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("next_user") !== null)
    }

    return (
        <>
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/taskboard" component={TaskBoardLandingPage} />
                {/* <Route exact path="/" element={<Home />} /> */}
            </BrowserRouter>
        </>
    )
}