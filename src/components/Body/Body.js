import React from "react";
import "../Body/Body.css";
import ImgContainer from "../Img_container/Img_container";

function Body() {
  return (
    <>
      <div className="body">
        <h1> Insert text and pictures</h1>

        <div className="text-box">
          <div className="text">Mad Metal Inc. specializes in</div>
        </div>
      </div>
      <ImgContainer src="steam_roller.jpeg" />
    </>
  );
}

export default Body;
