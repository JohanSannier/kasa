import React from "react";
import "../styles/Carousel.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Temporary from "../assets/temporarybg.png";

function Carousel(props) {
  return (
    <div className="carousel-wrapper">
      <FaChevronLeft className="previous-photo" />
      <FaChevronRight className="next-photo" />
      <img src={Temporary} alt="Appartement X" className="carousel" />
      <span className="photo-counter">1/4</span>
    </div>
  );
}

export default Carousel;
