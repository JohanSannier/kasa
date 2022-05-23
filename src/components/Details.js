import React from "react";
import Tagname from "../components/TagName";
import Dropdown from "../components/Dropdown";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "../styles/Details.css";

function Details(props) {
  let ratings = [1, 2, 3, 4, 5];
  const {
    id,
    title,
    cover,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = props.info;

  const currentRating = ratings.find((element) => element == rating);
  const filledStar = [];
  const emptyStar = [];
  const getRating = () => {
    let maxRating = 5;
    for (let i = 0; i < ratings[currentRating - 1]; i++) {
      filledStar.push(<FaStar />);
    }
    for (let j = 0; j < ratings[maxRating - currentRating - 1]; j++) {
      emptyStar.push(<FaRegStar />);
    }
  };
  getRating();

  return (
    <section className="details-wrapper">
      <div className="upper-details">
        <div className="left-details">
          <p className="title-details">{title}</p>
          <p className="location-details">{location}</p>
          <div className="tag-wrapper">
            <Tagname />
            <Tagname />
          </div>
        </div>
        <div className="right-details">
          <div className="landlord-details">
            <div className="name-details">
              <div className="firstname-details">{host.name}</div>
            </div>
            <img src={host.picture} alt={host.name} className="host-picture" />
          </div>
          <div className="stars-details">
            {filledStar.map((star, index) => (
              <FaStar key={`star${index}`} />
            ))}
            {emptyStar.map((greyStar, index) => (
              <FaRegStar key={`grey${index}`} />
            ))}
            {/* <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          <FaRegStar /> */}
          </div>
        </div>
      </div>
      <div className="bottom-details">
        <Dropdown title="Description" content={description} />
        <Dropdown title="Équipements" content={equipments} />
      </div>
    </section>
  );
}

export default Details;
