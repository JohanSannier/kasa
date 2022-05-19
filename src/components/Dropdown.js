import React from "react";
import "../styles/Dropdown.css";
import arrow_up from "../assets/arrow_up.png";

function Dropdown(props) {
  console.log(props.data);
  const equipments = props.data.map((data) => {
    return <li>{data.equipments}</li>;
  });

  return (
    <div className="dropdown-wrapper">
      <p className="dropdown-title">Equipements</p>
      <img src={arrow_up} alt="" className="arrow-icon" />
      <ul className="dropdown-list">{equipments}</ul>
    </div>
  );
}

export default Dropdown;
