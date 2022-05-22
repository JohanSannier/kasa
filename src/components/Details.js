import React from "react";
import Tagname from "../components/TagName";
import Dropdown from "../components/Dropdown";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "../styles/Details.css";

function Details(props) {
  let maxRating = 5;
  //   maxRating - data.rating = nombre d'étoiles grisées -- data.rating = nombre d'étoiles rouges
  return (
    <section className="details-wrapper">
      <div className="upper-details">
        <div className="left-details">
          <p className="title-details">Cozy loft canal Saint-Martin</p>
          <p className="location-details">Paris, Ile-de-France</p>
          <div className="tag-wrapper">
            <Tagname />
            <Tagname />
          </div>
        </div>
        <div className="right-details">
          <div className="landlord-details">
            <div className="name-details">
              <div className="firstname-details">Alexandre</div>
              <div className="lastname-details">Dumas</div>
            </div>
            <img
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg"
              alt="Alexandre Dumas"
              className="host-picture"
            />
          </div>
          <div className="stars-details">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        </div>
      </div>
      <div className="bottom-details">
        <Dropdown
          title="Description"
          content="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
        />
        <Dropdown
          title="Équipements"
          content="Climatisation
Wi-Fi
Cuisine
Espace de travail
Fer à repasser
Sèche-cheveux
Cintres"
        />
      </div>
    </section>
  );
}

export default Details;
