import React from "react";
import "../styles/Dropdown.css";
import arrow_up from "../assets/arrow_up.png";

function Dropdown(props) {
  return (
    <div className="dropdown-wrapper">
      <p className="dropdown-title">Equipements</p>
      <img src={arrow_up} alt="" className="arrow-icon" />
      <ul className="dropdown-list">
        <li>Climatisation</li>
        <li>Wi-Fi</li>
        <li>Cuisine</li>
        <li>Espace de travail</li>
        <li>Cintres</li>
      </ul>
    </div>
  );
}

export default Dropdown;
