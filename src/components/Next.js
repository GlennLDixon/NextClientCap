import React, { useState } from "react";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { NavBar } from "./nav/NavBar";
import "./Next.css";

export const Next = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("next_user") !== null
  );

  const setAuthUser = (user) => {
    sessionStorage.setItem("next_user", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("next_user") !== null);
  };

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("next_user") !== null);
  };
  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
      <ApplicationViews
        setAuthUse={setAuthUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      {/* <Login /> */}
    </>
  );
};
