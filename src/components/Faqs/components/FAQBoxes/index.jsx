import { useState } from "react";
import React from "react";

import "./index.css";

const FAQBoxes = ({ question, answer, id }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="tab">
      <input type="checkbox" id={`chek${id}`} />
      <label
        className="tab-label"
        onClick={() => setToggle(!toggle)}
        for={`chek${id}`}
      >
        <div className="tab-title">
          <div className="tab-img">
            <div className={toggle ? "verticle active" : "horizental active"}>
              {id}
            </div>
          </div>
          <div className="tab-question">{question}</div>
        </div>
      </label>
      <div className="tab-content">{answer}</div>
    </div>
  );
};

export default FAQBoxes;
