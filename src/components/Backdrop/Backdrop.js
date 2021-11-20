import React from "react";
import "../Backdrop/Backdrop.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../App.css";

function Backdrop() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/bird-catcher.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/bird-catcher.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/bird-catcher.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="backdrop-container">
        <div class="info-box" id="text-1">
          <p class="intro-text">
            Yo! I hear you need some sample text so this is all the sample text
            I got. Just for you!
          </p>
        </div>

        <div class="pic" id="pic-1">
          <img src="../images/bird-catcher.jpg" alt="" class="backdrop-image" />
        </div>

        {/* <div class="pic" id="pic-2">
          <img
            src="../images/steam_roller.jpeg"
            alt=""
            class="backdrop-image"
          />
        </div>

        <div class="pic" id="pic-1">
          <img src="../images/bird-catcher.jpg" alt="" class="backdrop-image" />
        </div> */}

        {/* <div class="info-box" id="text-2">
          <p class="intro-text">
            Yo! I hear you need some sample text so this is all the sample text I
            got. Just for you!
          </p>
        </div> */}

        <div className="banner">
          <ul className="bullets">
            <li className="bullet">
              <i class="fas fa-angle-double-right"></i>EFI peformance tuning.
            </li>
            <li className="bullet">Custom machining.</li>
            <li className="bullet">
              Powder coating.<i class="fas fa-angle-double-left"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Backdrop;
