import React from "react";
import "../styles/Carousel.css";
import NextPhoto from "../assets/next_photo.png";
import PreviousPhoto from "../assets/previous_photo.png";
import Temporary from "../assets/temporarybg.png";

function Carousel(props) {
  return (
    <div className="carousel-wrapper">
      <img src={NextPhoto} alt="Vue suivante" className="next-photo" />
      <img
        src={PreviousPhoto}
        alt="Vue précédente"
        className="previous-photo"
      />
      <img src={Temporary} alt="Appartement X" className="temporary" />
      <span className="photo-counter">1/4</span>
    </div>
  );
}

export default Carousel;
