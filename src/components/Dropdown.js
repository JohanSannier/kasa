import React, { useState } from "react";
import "../styles/Dropdown.css";
import arrow_up from "../assets/arrow_up.png";
import arrow_down from "../assets/arrow_down.png";

function Dropdown({ title, content }) {
  const [arrow, setArrow] = useState(arrow_up);
  console.log(content);
  let isOpen = false;
  let dropdown = document.querySelector(".dropdown-list");
  let typeOfContent = typeof content;

  function handleClick() {
    isOpen = !isOpen;
    setArrow(isOpen ? arrow_up : arrow_down);
    isOpen ? dropdown.classList.add("test") : dropdown.classList.remove("test");
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
