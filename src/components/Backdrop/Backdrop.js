import React from "react";
import "../Backdrop/Backdrop.css";
import Img_container from "../Img_container/Img_container";
import Text_banner from "../Text_banner/Text_banner";
// import "../../App.css";

function Backdrop() {
  return (
    <div className="container">
      <>
        <Text_banner />
        <Img_container src="../images/hero_car.jpg" />
        <Img_container src="../images/bird-catcher.jpg" />
      </>
    </div>
  );
}

export default Backdrop;
