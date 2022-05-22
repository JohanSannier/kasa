import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import DropdownLarge from "../components/DropdownLarge";
import background from "../assets/bg-apropos.png";

function About(props) {
  return (
    <>
      <Header />
      <Hero background={background} />;
      <DropdownLarge
        title="Fiabilité"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nemo quisquam quibusdam, atque facilis necessitatibus voluptatem voluptatibus dolores labore impedit."
      />
      <DropdownLarge
        title="Respect"
        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <DropdownLarge
        title="Service"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio accusantium blanditiis veritatis."
      />
      <DropdownLarge
        title="Responsabilité"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam!"
      />
      <Footer />
    </>
  );
}

export default About;
