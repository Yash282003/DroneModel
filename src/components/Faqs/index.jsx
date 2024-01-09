import React from "react";
import { useState, useEffect } from "react";
import "./index.scss";
import FAQBoxes from "./components/FAQBoxes";
import { questions } from "../RentingServicesPage/Data";
const Faqs = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="tabs">
          {questions?.map((item, index) => {
            return (
              <FAQBoxes
                id={item.id}
                question={item.question}
                answer={item.answer}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
