import React from "react";
import "../styles/Hero.css";

function Hero({ background, text }) {
  return (
    <section className="hero-banner">
      <img src={background} alt="Paysage" />
      {text && <p className="hero-text">{text}</p>}
    </section>
  );
}

export default Hero;
