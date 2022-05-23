import React, { useState } from "react";
import "../styles/Dropdown.css";
import arrow_up from "../assets/arrow_up.png";
import arrow_down from "../assets/arrow_down.png";

function Dropdown({ title, content }) {
  const [arrow, setArrow] = useState(arrow_up);
  const [isOpen, setIsOpen] = useState(true);
  // console.log(content);
  // console.log(isOpen);
  let dropdown = document.querySelector(".dropdown-list");
  let typeOfContent = typeof content;

  function handleClick() {
    setIsOpen(!isOpen);
    console.log("====================================");
    console.log(isOpen);
    console.log("====================================");
    setArrow(isOpen ? arrow_up : arrow_down);
  }

  return (
    <div className="dropdown-wrapper">
      <p className="dropdown-title">{title}</p>
      <img src={arrow} alt="" className="arrow-icon" onClick={handleClick} />
      <ul className="dropdown-list">
        {content}
        {/* {typeOfContent === "object"
          ? content.map((list, index) => {
              return <li key={`item ${index}`}>{list}</li>;
            })
          : { content }} */}
      </ul>
    </div>
  );
}

export default Dropdown;
