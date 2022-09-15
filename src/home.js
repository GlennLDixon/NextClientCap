import React from "react";
import studying from "./assets/studying.jpg";
import "./home.css";

export const Home = () => {
  return (
    <div className="landingPageContainer">
      <div className="landingLeftContent">
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          consequuntur magni nostrum deleniti dolore provident praesentium
          incidunt laborum repellat nesciunt ab beatae illum tempora blanditiis
          temporibus est, maxime hic earum.
        </h3>
      </div>
      <div className="landingRightContent">
        <img id="home-page-img" src={studying} alt="man studying" />
      </div>
    </div>
  );
};
