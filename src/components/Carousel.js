import React, { useState } from "react";
import "../styles/Carousel.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Carousel(props) {
  let picturesCounter = props.pictures.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(1);

  function handleClickNext() {
    currentIndex === props.pictures.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
    currentIndex === props.pictures.length - 1
      ? setCounter(1)
      : setCounter(counter + 1);
  }

  function handleClickPrevious() {
    currentIndex === 0
      ? setCurrentIndex(props.pictures.length - 1)
      : setCurrentIndex(currentIndex - 1);
    currentIndex === 0
      ? setCounter(props.pictures.length)
      : setCounter(counter - 1);
  }

  return (
    <div className="carousel-wrapper">
      <FaChevronLeft className="previous-photo" onClick={handleClickPrevious} />
      <FaChevronRight className="next-photo" onClick={handleClickNext} />
      <img
        src={props.pictures[currentIndex]}
        alt={`${props.title}`}
        className="carousel"
      />
      <span className="photo-counter">
        {counter}/{picturesCounter}
      </span>
    </div>
  );
}

export default Carousel;
