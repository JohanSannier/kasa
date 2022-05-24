import React from "react";
import { Link } from "react-router-dom";
import "../styles/Thumb.css";

function Thumb({ id, cover, title }) {
  return (
    <Link to={`/logement/${id}`}>
      <div className="thumb" id={id}>
        <img src={cover} alt={title} className="thumb-img" />
        <p className="thumb-title">{title}</p>
      </div>
    </Link>
  );
}

export default Thumb;
