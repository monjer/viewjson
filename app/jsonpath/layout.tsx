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
  title: "Online JSONPath Evaluator - Test & Validate JSONPath Expressions",
  description: "Free online JSONPath tester and validator. Query JSON data with JSONPath expressions, check syntax, and see real-time results. Perfect for developers working with JSON data structures.",
  alternates: {
    canonical: "https://viewjson.online/jsonpath",
  },
  keywords: [
    "JSONPath",
    "JSONPath evaluator",
    "JSON query",
    "JSONPath tester",
    "JSONPath syntax",
    "online JSONPath tool",
    "JSONPath validator",
    "JSON data query",
  ],
};