import React from "react";

function Card(props) {
  return <div className={`app-card border dark:border-gray-600 rounded-sm	${props.className || ''}`} style={props.style}>{props.children}</div>;
}

export default Card;