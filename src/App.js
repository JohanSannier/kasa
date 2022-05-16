import React from "react";
import TagName from "./components/TagName";
import Thumb from "./components/Thumb";
import Dropdown from "./components/Dropdown";
import DropdownLarge from "./components/DropdownLarge";
import Carousel from "./components/Carousel";

function App(props) {
  return (
    <div>
      <TagName />
      <Thumb />
      <Dropdown />
      <DropdownLarge />
      <Carousel />
    </div>
  );
}

export default App;
