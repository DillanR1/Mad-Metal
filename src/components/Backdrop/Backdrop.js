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
      <div className="banner">
        <ul className="bullets">
          <li className="bullet">EFI peformance tuning</li>
          <li className="bullet"> custom machining</li>
          <li className="bullet"> & powder coating</li>
        </ul>
      </div>
      {/* <div>
        <Img_container src="../images/hero_car.jpg" />
      </div> */}
    </div>
  );
}

export default Backdrop;
