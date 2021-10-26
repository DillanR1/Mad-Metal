import React from "react";
import "../Backdrop/Backdrop.css";
// import "../../App.css";

function Backdrop() {
  return (
    <div className="container">
      <div className="text">
        <h1>Welcome to the world of Mad Metal!</h1>
        <p>
          Custom machining of speedparts, powder coating, and peformance tuning.
        </p>
      </div>
      <div className="hero-container">
        <img src="../images/hero_car.jpg" alt="" />
      </div>
    </div>
  );
}

export default Backdrop;
