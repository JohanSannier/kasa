import React from "react";
import "../styles/DropdownLarge.css";
import arrow_up from "../assets/arrow_up.png";

function DropdownLarge(props) {
  return (
    <div className="dropdown-large-wrapper">
      <p className="dropdown-large-title">Respect</p>
      <img src={arrow_up} alt="" className="arrow-icon" />
      <p className="dropwdown-large-text">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </p>
    </div>
  );
}

export default DropdownLarge;
