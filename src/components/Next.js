import React, { useState } from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./Next.css"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const Next = () => {
    let token = true
    return (
        <>
            <Route render={() => {
                if (token === true) {
                    return <>
                        <Route>
                            <NavBar />
                            <ApplicationViews />
                        </Route>
                    </>
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>
        </>
    )

}
