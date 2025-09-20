import React from "react";
import Article from "@/components/Article";
import { Metadata } from 'next';

export default function About() {

  return (
    <div className="gt-4 max-w-[1024px] mx-auto mt-10">
      <Article>
        <h1 className="mt-4">About viewjson</h1>
        <p>Welcome to viewjson, viewjson is an online tool for processing json data, which can be used to format, compress, verify, and convert json data to other data formats.</p>
        <p>viewjson is built with other related open source tools, very thanks to all these open projects and their authors , including：</p>
        <ul>
          <li><a target="_blank" href="https://github.com/codemirror/codemirror">codemirror</a>, use as a json editor for highlight.</li>
          <li><a target="_blank" href="https://thememirror.net/" >thememirror</a>, a codemirror theme library, used for json editor dark and light theme.</li>
          <li><a target="_blank" href="https://www.npmjs.com/package/js-base64">js-base64</a>, used to convert json string to base64.</li>
          <li><a target="_blank" href="https://prettier.io/">prettier</a>, used to format json string.</li>
          <li><a target="_blank" href="https://github.com/yaml/yaml">yaml</a>, used to convert json string to yaml format.</li>
          <li><a target="_blank" href="https://github.com/nashwaan/xml-js">xml-js</a>, used to convert json string to xml format.</li>
          <li><a target="_blank" href="github.com/ashphy/jsonpath-js">jsonpath-js</a>, a JavaScript implementation of JSONPath base on JSONPath RFC 9535, which is a query language for JSON similar to how XPath is used for XML. It allows you to extract data from JSON structures using path expressions.</li>
          <li><a target="_blank" href="https://github.com/nashwaan/xml-js">jsonpath-plus</a>, analyse, transform, and selectively extract data from JSON documents (and JavaScript objects).jsonpath-plus expands on the original specification to add some additional operators and makes explicit some behaviors the original did not spell out.</li>
        </ul>
      </Article>
    </div >
  );
}


export const metadata: Metadata = {
  title: "About viewjson - Online JSON Processing Tool",
  description: "Learn about viewjson, an online tool for processing JSON data. Discover how we format, compress, verify, and convert JSON data to other formats using open source technologies.",
  alternates: {
    canonical: "https://viewjson.online/about",
  },
  keywords: [
    "viewjson",
    "JSON processing tool",
    "JSON formatter",
    "JSON converter",
    "JSON validator",
    "open source JSON tools",
    "JSON data processing",
    "codemirror",
    "prettier",
    "jsonpath",
    "yaml converter",
    "xml converter",
  ],
};