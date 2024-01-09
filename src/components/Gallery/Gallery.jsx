import React from "react";
import img_1 from "./assets/img_1.jpg";
import img_2 from "./assets/img_2.jpg";
import img_3 from "./assets/img_3.jpg";
import img_4 from "./assets/img_4.jpg";
function Gallery() {
  return (
    <>
    <h3 className="gallery_title">Gallery</h3>
      <div className="gallery_container">
        <div className="gallery_pics">
          <img src={img_1} alt="img_1" />
          <div className="img_desc">
            <p>
              Prof. Siddhartha Khare (Founder and Director of BHOOMICAM Startup)
              was invited by UNITED NATIONS congress held at Hyderabad to chair
              a session and deliver a talk on his startup prototype.
            </p>
          </div>
        </div>
        <div className="gallery_pics">
          <img src={img_2} alt="img_2" />
          <div className="img_desc">
            <p>
              Prof. Siddhartha Khare (Founder and Director of BHOOMICAM Startup)
              was invited by UNITED NATIONS congress held at Hyderabad to chair
              a session and deliver a talk on his startup prototype.
            </p>
          </div>
        </div>
        <div className="gallery_pics ">
          <img src={img_3} alt="img_3" />
          <div className="img_desc">
            <p>
              Prof. Siddhartha Khare (Founder and Director of BHOOMICAM Startup)
              was invited by UNITED NATIONS congress held at Hyderabad to chair
              a session and deliver a talk on his startup prototype.
            </p>
          </div>
        </div>
        <div className="gallery_pics">
          <img src={img_4} alt="img_4" />
          <div className="img_desc">
            <p>
              Prof. Siddhartha Khare (Founder and Director of BHOOMICAM Startup)
              was invited by UNITED NATIONS congress held at Hyderabad to chair
              a session and deliver a talk on his startup prototype.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
