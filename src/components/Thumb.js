import React from "react";
import "../styles/Thumb.css";

function Thumb({ id, cover, title }) {
  return (
    <div className="thumb" id={id}>
      <img src={cover} alt={title} className="thumb-img" />
      <p className="thumb-title">{title}</p>
    </div>
  );
}

export default Thumb;
