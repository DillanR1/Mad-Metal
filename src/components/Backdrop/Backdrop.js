import React from "react";
import "../Backdrop/Backdrop.css";

// import "../../App.css";

function Backdrop() {
  return (
    <div className="container">
      <img
        className="background-image"
        src="../images/bird-catcher.jpg"
        alt=""
      />

      <h1>Mad Metal</h1>
      <p>EFI peformance tuning machining powder coating</p>

      {/* <div>
        <Img_container src="../images/hero_car.jpg" />
      </div> */}
    </div>
  );
}

export default Backdrop;
