import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

function Slider() {
  return (
    <>
      <div className="slider-container">
        <Carousel variant="light">
          <Carousel.Item>
            <img
              className="slider-images d-block w-100"
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
              className="slider-images d-block w-100"
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
              className="slider-images d-block w-100"
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
      </div>
    </>
  );
}

export default Slider;
