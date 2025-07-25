'use client';
import React from "react";
import ResponseContainer from "@/slots/ResponseContainer";
interface Props {
  children?: React.ReactNode
}
const Layout: React.FC = (props: Props) => {
  return (
    <ResponseContainer >
      {props.children}
    </ResponseContainer>
  );
};

export default Layout;