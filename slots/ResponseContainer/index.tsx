import React from "react";

export default function ResponseContainer(props) {
  const { children, className = "", style = {} } = props;
  return <div className={`px-6 mx-auto ${className}`} style={style}>{children}</div>;
}