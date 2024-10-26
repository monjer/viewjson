import React from "react";
import ResponseContainer from "@/slots/ResponseContainer";

type FormatLayoutProps = {
  children?: React.ReactNode
}
const FormatLayout: React.FC = (props: FormatLayoutProps) => {
  return (
    <ResponseContainer className="app-format-content h-[calc(100vh-80px)] overflow-hidden">
      {props.children}
    </ResponseContainer>
  )
}

export default FormatLayout;