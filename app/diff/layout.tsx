import React from "react";
import ResponseContainer from "@/slots/ResponseContainer";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "JSON Diff Online Tool - Compare JSON Files Side by Side",
  description: "Compare two JSON files or data blocks side by side with our free JSON Diff tool. Instantly detect differences in keys, values, or structure. Perfect for debugging APIs, configuration files, or collaborative development.",
  alternates: {
    canonical: "https://viewjson.online/diff",
  },
  keywords: [
    "JSON diff",
    "JSON compare",
    "JSON difference",
    "compare JSON files",
    "JSON comparison tool",
    "JSON diff online",
    "JSON data comparison",
    "API response comparison",
    "configuration file diff",
  ],
};

export default Layout;