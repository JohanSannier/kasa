import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import background from "../assets/bg-home.png";

function Home(props) {
  return (
    <>
      <Header />
      <Hero background={background} text="Chez vous, partout et ailleurs" />
      <Footer />
    </>
  );
}

export default Home;
