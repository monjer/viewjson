import ResponseContainer from "@/slots/ResponseContainer";
import React from "react";

export default function About() {

  return (
    <ResponseContainer className="gt-4">
      <article>
        <h1>About viewjson</h1>
        <p>Welcome to viewjson, viewjson is an online tool for processing json data, which can be used to format, compress, verify, and convert json data to other data formats.</p>
        <p>viewjson is built with other related open source tools, very thanks to all these open projects and their authors , including：</p>
        <ul>
          <li><a target="_blank" href="https://github.com/codemirror/codemirror">codemirror</a>, use as a json editor for highlight.</li>
          <li><a target="_blank" href="https://thememirror.net/" >thememirror</a>, a codemirror theme library, used for json editor dark and light theme.</li>
          <li><a target="_blank" href="https://www.npmjs.com/package/js-base64">js-base64</a>, used to convert json string to base64.</li>
          <li><a target="_blank" href="https://prettier.io/">prettier</a>, used to format json string.</li>
          <li><a target="_blank" href="https://github.com/yaml/yaml">yaml</a>, used to convert json string to yaml format.</li>
          <li><a target="_blank" href="https://github.com/nashwaan/xml-js">xml-js</a>, used to convert json string to xml format.</li>
        </ul>
      </article>
    </ResponseContainer >
  );
}