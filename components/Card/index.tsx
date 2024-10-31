import React from "react";

function Card(props) {
  return <div className={`app-card border w-full border-stone-300	 dark:border-gray-600 rounded-sm overflow-y-auto	${props.className || ''}`} style={props.style}>{props.children}</div>;
}

export default Card;