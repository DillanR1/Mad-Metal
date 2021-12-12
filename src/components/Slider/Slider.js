import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

function Slider() {
  return (
    <>
      <div className="slider-container">
        <div className="info-text">
          <h1>Welcome to Mad Metal Inc.</h1>
          <h2>
            From custom cruisers to dedicated speed machines, we offer a wide
            array of services for all hotrod enthusiasts{" "}
          </h2>
          <h4>
            Whether you want to restore dad's old hotrod to its former glory,
            wake up a sleepy car with some performance modifications or you have
            a specific project inquiry, We'd love to help make your automotive
            dreams a reality!
          </h4>
        </div>
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
              src="../images/cnc-machine.jpeg"
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
              src="../images/roadster.jpeg"
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
