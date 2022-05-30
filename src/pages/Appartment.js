import React from "react";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Details from "../components/Details";
import Error from "../pages/Error";

function Appartment(props) {
  const { appartmentId } = useParams();
  const appartment = data.find((apt) => apt.id === appartmentId);

  return (
    <>
      {appartment !== undefined ? (
        <>
          <Carousel pictures={appartment.pictures} title={appartment.title} />
          <Details info={appartment} />
        </>
      ) : (
        <Error />
      )}
    </>
  );
}

export default Appartment;
