import React from "react";
import Content from './Content';

export default function Page() {
  return (
    <div className="mt-4">
      <Content />
      <h1 >About viewjson.online</h1>
      <p>viewjson is an online json viewer, json beautifier, json formatter, json data converter, json diff, json validator tools.</p>
      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <ul className="feature-list">
            <li>
              <h3>JSON Basic Process</h3>
              <p>Provide some basic json data process methods daily used, such as json minify, json prettify, json highlight.</p>
            </li>
            <li>
              <h3>JSON Conversion</h3>
              <p>Easily convert JSON data to and from various formats, including <a href="/convert/json-to-xml" className="link">JSON to XML</a>,
                <a href="/convert/json-to-csv" className="link">JSON to CSV</a>, <a className="link">JSON to YAML</a>, <a href="/convert/json-to-base64"> JSON to Base64</a>,
                <a href="/convert/json-to-html" className="link">JSON to  HTML</a>.</p>
            </li>
            <li>
              <h3>JSON Formatting</h3>
              <p>Keep your JSON data organized with our formatting tools that ensure readability and consistency.</p>
            </li>
            <li>
              <h3>JSON Validation</h3>
              <p>Provide a simple and efficient <a href="/validate" className="link">json vaildation tool </a>to find any json data syntax errors.</p>
            </li>
            <li>
              <h3>JSON Diff</h3>
              <p>Use <a href="/diff" className="link">json diff tool</a> to Compare two JSON files and identify the differences between them.</p>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}