import React, { Fragment, useState, useEffect } from "react";
import drone from "./assets/drone.png";
import bg from "./assets/bg.png";
import MetaData from "../../containers/MetaData";
import "../../styles/drone.css";
import DroneModel from "./DroneModel";
import DroneModel2 from "./DroneModel2";
import poster from "./assets/poster.png";

function Drone() {
  const [isMobile, setIsMobile] = useState(false);
  const [showSecondDroneModel, setShowSecondDroneModel] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Adjust the breakpoint as needed
    };

    // const handleScroll = () => {
    // Check if the scroll position is greater than or equal to 200vh
    // setShowSecondDroneModel(window.scrollY >= window.innerHeight * 2);
    // };

    window.addEventListener("resize", handleResize);
    // window.addEventListener("scroll", handleScroll);

    handleResize(); // Initial check for mobile
    // handleScroll();
    // Initial check for scroll position

    return () => {
      window.removeEventListener("resize", handleResize);
      // window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="drone_wrapper">
      <MetaData title="Drone" />
      <div className="first_container">
        <div className="container_image">
          <img src={drone} />
        </div>
      </div>
      
      <div className="second_container information">
        <div className="offer_info">
          <h1>What we offer?</h1>
          <p id="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper
          </p>
          <button className="bookNow">Book Now</button>
        </div>
        <div className="features">
          <div className="features_info">
            <div className="id"></div>
            <div className="info">
              <h3>High Quality Spray</h3>
              <p id="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec,
              </p>
            </div>
          </div>
          <div className="features_info">
            <div className="id"></div>
            <div className="info">
              <h3>High Quality Spray</h3>
              <p id="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec,
              </p>
            </div>
          </div>
          <div className="features_info">
            <div className="id"></div>
            <div className="info">
              <h3>High Quality Spray</h3>
              <p id="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec,
              </p>
            </div>
          </div>
          <div className="features_info">
            <div className="id"></div>
            <div className="info">
              <h3>High Quality Spray</h3>
              <p id="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec,
              </p>
            </div>
          </div>
        </div>
      </div>
        {isMobile ? (
            <DroneModel2 />
        ) : (
          <div>
            <DroneModel />
          </div>
        )}
        {/* {showSecondDroneModel && (
          <div>
            <DroneModel2/>
          </div>
        )} */}
      <div className="third_container droneSpace"></div>
      <div className="image_container">
        <div className="aboutInfo">
          <h4>Drone model name</h4>
          <p className="aboutPara">
            Fast and Cost Efficient Drone Spraying Service
          </p>
          <p className="aboutDrone">
            Click and Drag the drone model to interact with it and see the
            details of the model.
          </p>
        </div>
      </div>
      <div className="fourth_container bottom">
        <img src={poster} className="poster" />
      </div>
    </div>
  );
}

export default Drone;
