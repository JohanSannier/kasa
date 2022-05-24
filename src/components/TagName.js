import React from "react";
import "../styles/TagName.css";

function TagName(props) {
  return <span className="tag">{props.content}</span>;
}

export default TagName;
