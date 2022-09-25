import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./ApplicationViews.css";
import {
  BrowserRouter,
  Router,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { TaskBoardLandingPage } from "./taskboardlanding/TBLandingPage";
import { Home } from "../home";
import { TaskListPage } from "./taskboard/TaskListPage";
import { TaskEditForm } from "./taskboard/TaskEditForm";
import { LandingEditForm } from "./taskboardlanding/TBLandingEditForm";

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Link to="/login" />;
  };

  const setAuthUser = (user) => {
    sessionStorage.setItem("next_user", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("next_user") !== null);
  };


  const { id } = useParams()

  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/taskboardlandingpage" component={TaskBoardLandingPage} />
        <Route exact path="/taskListpage/:taskboardId" component={TaskListPage} />
        <Route exact path="/taskboardpage/:taskId/edit" component={TaskEditForm} />
        <Route exact path="/taskboardlandingpage/:boardId/edit" component={LandingEditForm} />
      </BrowserRouter>
    </>
  );
};
