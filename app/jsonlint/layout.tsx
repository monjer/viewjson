import React from "react";
import ResponseContainer from "@/slots/ResponseContainer";
import { Metadata } from 'next';


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

export const metadata: Metadata = {
  title: 'viewjson - JSON lint',
  description: 'JSON lint and validator.',
  keywords: 'JSON lint, JSON validator, JSON online tool',
};