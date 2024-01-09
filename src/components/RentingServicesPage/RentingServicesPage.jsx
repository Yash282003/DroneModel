import React, { Fragment } from "react";
import { useState } from "react";
import MetaData from "../../containers/MetaData";
import rentImage from "./assets/rentImage.jpeg";
import bgImage from "./assets/bgImage.png";
import "../../styles/rentingServices.css";
import Faqs from "../Faqs";
import poster from "./assets/poster.png"
import { questions } from "./Data";
const RentingServicesPage = () => {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }
  return (
    <Fragment>
      <MetaData title="Renting Services | BHOOMICAM" />
      <div className="servicesPage">
        <div className="servicesTitle ">
          <div className="titleDescp">
            <button className="serviceButton">services</button>
            <h1>Renting Services</h1>
            <hr />
            <p>
              Monitoring and Management for companies. Minimizing the expenses
              associated with machine rentals. Intuitive mobile
              application,available in the user's native language
            </p>
          </div>
          <div className="image">
            <img src={rentImage} />
          </div>
        </div>
      </div>
      <div className="bgimage-container">
       
        <p className="bgPara">
          Renting Services to Farmers for Agricultural Machinery
        </p>
      </div>

      <div className="servicesPage">
        <div className="servicesTitle reversal">
          <div className="image1">
            <img src={rentImage} />
          </div>
          <div className="titleDescp">
            <button className="serviceButton">working</button>
            <h1>How things work?</h1>
            <hr />
            <div className="container">
              
              <Faqs/>
            </div>
          </div>
        </div>
      </div>

      <div className="servicesPage ">
        <div className="servicesTitle">
          <div className="titleDescp">
            <button className="serviceButton">study</button>
            <h1>Our Case study</h1>
            <hr />
            <p>
              In this case study, we evaluated the efficacy of time-lapse
              PhenoCam digital images to understand the phenology of black
              spruce tree species at daily temporal resolution. We also
              calibrated our PhenoCam derived phenology parameters with
              satellite derived vegetation indices.
            </p>
          </div>
          <div className="image1">
            <img src={rentImage} />
          </div>
        </div>
      </div>
      <div className="servicesPage">
        <img src={poster} className="poster"/>
      </div>
    </Fragment>
  );
};

export default RentingServicesPage;
