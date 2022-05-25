import React, { useState } from "react";
import "../styles/Dropdown.css";
import arrow_up from "../assets/arrow_up.png";
import arrow_down from "../assets/arrow_down.png";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [typeOfContent, setTypeOfContent] = useState(typeof content);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown-wrapper">
      <p className="dropdown-title">{title}</p>
      <img
        src={isOpen ? arrow_up : arrow_down}
        alt="Voir le texte"
        className="arrow-icon"
        onClick={handleClick}
      />
      {isOpen && (
        <ul className="dropdown-list">
          {typeOfContent === "string" ? (
            <li>{content}</li>
          ) : (
            content.map((list, index) => {
              return <li key={`item ${index}`}>{list}</li>;
            })
          )}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
