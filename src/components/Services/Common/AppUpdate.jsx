import React from "react";

const AppUpdate = ({
  title,
  content,
  image1,
  image2,
  image3,
  image4,
  image5,
}) => {
  return (
    <div>
      <div className="app_update_wrapper">
        <div className="title">{title}</div>
        <div className="side_block"></div>
      </div>
      <div className="app_update">{content}</div>
      <div className="images">
        <div className="image">
          <img src={image1} alt="" />
        </div>
        <div className="image">
          <img src={image2} alt="" />
        </div>
        <div className="image">
          <img src={image3} alt="" />
        </div>
        <div className="image">
          <img src={image4} alt="" />
        </div>
        {image5 ? (
          <div className="img5">
            <img src={image5} alt="" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AppUpdate;
