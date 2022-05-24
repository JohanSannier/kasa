import React, { useState } from "react";
import "../styles/DropdownLarge.css";
import arrow_up from "../assets/arrow_up.png";
import arrow_down from "../assets/arrow_down.png";

function DropdownLarge({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="dropdown-large-wrapper">
      <p className="dropdown-large-title">{title}</p>
      <img
        src={isOpen ? arrow_up : arrow_down}
        alt="Voir le texte"
        className="arrow-icon"
        onClick={handleClick}
      />
      {isOpen && <p className="dropwdown-large-text">{text}</p>}
    </div>
  );
}

export default DropdownLarge;
