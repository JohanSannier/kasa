import React, { useState } from "react";
import "../styles/DropdownLarge.css";
import arrow_up from "../assets/arrow_up.png";
import arrow_down from "../assets/arrow_down.png";

function DropdownLarge({ title, text }) {
  const [arrow, setArrow] = useState(arrow_up);
  let isReadable = false;

  function handleClick() {
    isReadable = !isReadable;
    setArrow(isReadable ? arrow_up : arrow_down);
  }
  return (
    <div className="dropdown-large-wrapper">
      <p className="dropdown-large-title">{title}</p>
      <img src={arrow} alt="" className="arrow-icon" onClick={handleClick} />
      <p className="dropwdown-large-text">{text}</p>
    </div>
  );
}

export default DropdownLarge;
