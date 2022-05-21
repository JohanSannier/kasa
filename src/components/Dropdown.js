import React, { useState } from "react";
import "../styles/Dropdown.css";
import arrow_up from "../assets/arrow_up.png";
import arrow_down from "../assets/arrow_down.png";

function Dropdown(props) {
  const [arrow, setArrow] = useState(arrow_up);
  const [list, setlist] = useState("coco");
  // const equipments = props.data.map((data, index) => {
  //   return <li key={`item ${index}`}>{data.equipments}</li>;
  // });
  let isOpen = false;
  let dropdown = document.querySelector(".dropdown-list");

  function handleClick() {
    isOpen = !isOpen;
    setArrow(isOpen ? arrow_up : arrow_down);
    setlist("test");
    isOpen ? dropdown.classList.add("test") : dropdown.classList.remove("test");
  }

  return (
    <div className="dropdown-wrapper">
      <p className="dropdown-title">Equipements</p>
      <img src={arrow} alt="" className="arrow-icon" onClick={handleClick} />
      <ul className="dropdown-list"></ul>
      {list}
    </div>
  );
}

export default Dropdown;
