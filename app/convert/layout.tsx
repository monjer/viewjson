import React from "react";
import ResponseContainer from "@/slots/ResponseContainer";
interface Props {
  children?: React.ReactNode
}
const Layout: React.FC = (props: Props) => {
  return (
    <ResponseContainer className="min-h-[calc(60vh)]">
      {props.children}
    </ResponseContainer>
  );
};

export default Layout;