import React from "react";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Details from "../components/Details";

function Appartment(props) {
  const { appartmentId } = useParams();
  const appartment = data.find((apt) => apt.id === appartmentId);

  return (
    <>
      <h2>{appartmentId}</h2>
      <Carousel info={appartment.pictures} />
      <Details info={appartment} />
    </>
  );
}

export default Appartment;
