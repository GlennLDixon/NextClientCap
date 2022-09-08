import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ token, setToken }) => {
    const history = useHistory()
    return (
        <nav className="navbar is-success mb-3" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <h1 className="title is-4">Next</h1>
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    {
                        token
                            ?
                            <Link to="/" className="navbar-item">Posts</Link>
                            :
                            ""
                    }
                    {
                        token
                            ?
                            <Link to="/my-posts" className="navbar-item">My Posts</Link>
                            :
                            ""
                    }
                    {
                        token
                            ?
                            <Link to="/new-post" className="navbar-item">New Post</Link>
                            :
                            ""
                    }
                    {
                        token
                            ?
                            <Link to="/categories" className="navbar-item">Category Manager</Link>
                            :
                            ""
                    }
                    {
                        token
                            ?
                            <Link to="/tags" className="navbar-item">Tag Management</Link>
                            :
                            ""
                    }
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            {
                                token
                                    ?
                                    <button className="button is-outlined" onClick={() => {
                                        setToken('')
                                        history.push('/login')
                                    }}>Logout</button>
                                    :
                                    <>
                                        <Link to="/register" className="button is-link">Register</Link>
                                        <Link to="/login" className="button is-outlined">Login</Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}