import React from "react";
import Hero from "../components/Hero";
import Thumb from "../components/Thumb";
import background from "../assets/bg-home.png";
import data from "../data/data.json";

function Home(props) {
  return (
    <>
      <Hero background={background} text="Chez vous, partout et ailleurs" />
      <section className="location-display">
        {data.map((card) => (
          <Thumb
            key={card.id}
            id={card.id}
            cover={card.cover}
            title={card.title}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
