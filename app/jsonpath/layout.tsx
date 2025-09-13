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
  title: 'viewjson - JSONPath Checker',
  description: 'Used to check JSONPath expressions',
  keywords: 'JSONPath Checker, JSONPath, JSONPath online tool',
};