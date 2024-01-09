import React from "react";
import Drone from "./assets/drone.png";
import Rent from "./assets/rent.png";
import Rentdata from "./assets/Rent-data.png";
import fintech from "./assets/fintech.png";
import farm from "./assets/farm.png";
import consult from "./assets/consult.png";
import Servicecard from "./Common/Servicecard";
import AppUpdate from "./Common/AppUpdate";
import stall1 from "./assets/stall1.png";
import stall2 from "./assets/stall2.png";
import stall3 from "./assets/stall3.png";
import stall4 from "./assets/stall4.png";
import mobile1 from "./assets/mobile1.png";
import mobile2 from "./assets/mobile2.png";
import mobile3 from "./assets/mobile3.png";
import mobile4 from "./assets/mobile4.png";
import geoSpace from "./assets/geoSpace.png";
const data = [
  {
    img: Drone,
    Topic: "Drone Based Services",
    Description1:
      "• Artificial Intelligence and Geospatial Technology for on demand crop health analysis ",
    Description2: "• Evidence (mapping plots, assessing crop damage)",
    Description3: "• Spray Services",
  },

  {
    img: fintech,
    Topic: " FinTech Solution for Vigilance",
    Description1: "• Yielding and Surveillience ",
    Description2: "• Digitalized Application ",
    Description3:
      "• Artificial Intelligence and Geospatial Technology for Insurance and Banks",
  },
];
const rentdata = [
  {
    img: Rentdata,
    Topic: "Renting Services",
    Description1: "• Monitoring and Management for companies ",
    Description2: "•  Minimizing the expenses associated with machine rentals",
    Description3:
      "• Intuitive mobile application,available in the user's native language",
  },
];

const Services = (props) => {
  return (
    <div className="services-wrapper">
      <div className="services-header">
        <div className="header-line"></div>
        <h1> Our Services</h1>
        <div className="header-line"></div>
      </div>
      <div className="service-container">
        {data.map((e) => {
          return (
            <>
              <Servicecard
                image={e.img}
                Topic={e.Topic}
                Description1={e.Description1}
                Description2={e.Description2}
                Description3={e.Description3}
              />
            </>
          );
        })}
      </div>
      <div className="service-container2">
        <Servicecard
          image={rentdata[0].img}
          Topic={rentdata[0].Topic}
          Description1={rentdata[0].Description1}
          Description2={rentdata[0].Description2}
          Description3={rentdata[0].Description3}
        />
      </div>
      <AppUpdate
        title="Renting Services to Farmers for Agricultural Machinery"
        content="With our intuitive mobile application, available in your native language, the power to optimize your farming operations is at your fingertips. Experience the unmatched convenience of Bhoomicam's rental services and elevate your farming endeavors to new heights of success. Join us in shaping the future of agriculture today!"
        image1={mobile1}
        image2={mobile2}
        image3={mobile3}
        image4={mobile4}
      />

      <AppUpdate
        title="Geospatial Platform for Farmers, Crop consultants, Banks and Insurance Companies "
        content="Welcome to our groundbreaking platform that unites vendors, crop consultants, government agencies, and farmers on a single dynamic hub! Experience the organic ecommerce revolution where high-quality organic consumables are readily transacted. Embrace a seamless ecosystem where collaboration thrives, promoting sustainable farming practices and fostering a healthier future for all. Join us today and be part of the organic revolution!"
        image5={geoSpace}
      />
      <div className="future-targets">
        <h1>Future Targets</h1>
        <AppUpdate
          title="Organic Vegetables and Fruits Delivery Apps"
          content='Discover the organic revolution with our innovative vegetable and fruit delivery app! Experience the convenience of our unique "Stalls Nearby" feature, connecting you to a variety of organic product sellers in your vicinity. Explore and choose from a wide range of wholesome options, right at your fingertips. Embrace healthier living with ease and convenience!'
          image1={stall1}
          image2={stall2}
          image3={stall3}
          image4={stall4}
        />
      </div>
      <div className="other-services-container">
        <h1>Other Services</h1>
        <div className="other-services">
          <div className="services">
            <ul>
              <li>
                Geo Spatial Database for National Park/Sanctuaries/Biosphere
                Reserve
              </li>
              <li>Forest Type Thematic Mapping</li>
              <li>Inventory of Forest/Tree Resources</li>
            </ul>
          </div>
          <div className="services">
            <ul>
              <li>Health Tracking of Forest</li>
              <li> Real Time Monitoring of active fires</li>
              <li>Land Use Land Cover Maps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
