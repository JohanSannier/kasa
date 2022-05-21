import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import TagName from "../components/TagName";
import Thumb from "../components/Thumb";
import Dropdown from "../components/Dropdown";
import DropdownLarge from "../components/DropdownLarge";
import Carousel from "../components/Carousel";

export default function Composants() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/appartment">Appartment</Link>
        <Link to="*">Error</Link>
      </nav>
      {/* <TagName />
      <Thumb /> */}
      <Dropdown data={data} />
      <DropdownLarge />
      <Carousel />
    </div>
  );
}
