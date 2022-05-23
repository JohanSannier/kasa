import React, { useState } from "react";
import "../styles/Dropdown.css";
import arrow_up from "../assets/arrow_up.png";
import arrow_down from "../assets/arrow_down.png";

function Dropdown({ title, content }) {
  const [arrow, setArrow] = useState(arrow_up);
  const equipments = content.map((data, index) => {
    return <li key={`item ${index}`}>{data}</li>;
  });
  let isOpen = false;
  let dropdown = document.querySelector(".dropdown-list");

  function handleClick() {
    isOpen = !isOpen;
    setArrow(isOpen ? arrow_up : arrow_down);
    isOpen ? dropdown.classList.add("test") : dropdown.classList.remove("test");
  }

  return (
    <div className="dropdown-wrapper">
      <p className="dropdown-title">{title}</p>
      <img src={arrow} alt="" className="arrow-icon" onClick={handleClick} />
      <ul className="dropdown-list">{equipments}</ul>
    </div>
  );
}

export default Dropdown;
