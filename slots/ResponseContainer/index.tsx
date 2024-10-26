import React from "react";

export default function ResponseContainer(props) {
  const { children, className = "", style = {} } = props;
  return <div className={`xl:container lg:container md:container	mx-auto ${className}`} style={style}>{children}</div>;
}