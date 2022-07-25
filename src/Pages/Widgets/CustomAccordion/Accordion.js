import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ children, title, isExpand = false }) => {
  const [expand, setExpand] = useState(isExpand);

  return (
    <div className="box">
      <div
        className={`title-box ${!expand ? "" : " expended"}`}
        onClick={() => setExpand((expand) => !expand)}
      >
        <span className="title">{title}</span>

        <span className="icon">
          <i className={`icon-Chevron---${!expand ? "Right" : "Up"}`}></i>
        </span>
        <div className="clearfix"></div>
      </div>
      {/* {expand && <div className="content">{children}</div>} */}
      <div className={`content ${!expand ? " hide" : " show"}`}>{children}</div>
    </div>
  );
};
export default Accordion;
