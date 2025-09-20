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
  title: "JSON Lint Online Tool - Validate and Format JSON Data",
  description: "Free online JSON validator and formatter. Check JSON syntax, detect errors, and format your JSON data instantly. Perfect for developers working with APIs and web applications.",
  alternates: {
    canonical: "https://viewjson.online/jsonlint",
  },
  keywords: ["JSON lint", "JSON validator", "JSON formatter", "JSON syntax checker", "online JSON tool", "JSON parser"],
};