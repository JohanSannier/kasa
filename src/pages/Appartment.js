import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Details from "../components/Details";

function Appartment(props) {
  return (
    <>
      <Header />
      <Carousel />
      <Details />
      <Footer />
    </>
  );
}

export default Appartment;
