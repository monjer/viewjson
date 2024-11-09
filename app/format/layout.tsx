import React from "react";
import ResponseContainer from "@/slots/ResponseContainer";

interface FormatLayoutProps {
  children?: React.ReactNode
}
const FormatLayout: React.FC = (props: FormatLayoutProps) => {
  return (
    <ResponseContainer className="h-[calc(100vh-60px)] overflow-hidden">
      {props.children}
    </ResponseContainer>
  );
};

export default FormatLayout;