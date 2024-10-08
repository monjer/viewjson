import React from "react";

function Flex(props) {
  return <div className={`flex justify-start gap-x-1	${props.className || ''}`} style={props.style}>{props.children}</div>;
}

export default Flex;