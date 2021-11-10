import React from "react";
import "../Img_container/Img_container.css";

function Img_container(props) {
  return (
    <>
      <div className="hero-container">
        <img className="item" src={props.src} alt="" />
      </div>
      <div className="text">
        <h5 className="item_text">{props.text}</h5>
      </div>
    </>
  );
}

export default Img_container;
