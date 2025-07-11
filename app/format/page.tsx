import React from "react";
import Content from './Content';

export default function Page() {
  return (
    <div className="mt-4">
      <Content />
      <article>
        <h2>About viewjson.online</h2>
        <p>viewjson.online is an online json viewer, json beautifier, json formatter, json data converter, json diff, json path checker, json validator tools.</p>
        <section className="features">
          <div className="container">
            <ul className="feature-list">
              <li>
                <strong>JSON Basic Process: </strong>
                <span>Provide some basic json data process methods daily used, such as json minify, json prettify, json highlight.</span>
              </li>
              <li>
                <strong>JSON Conversion: </strong>
                <span>Easily convert JSON data to and from various formats, including <a href="/convert/json-to-xml" className="link mr-1">JSON to XML</a>, &nbsp;
                  <a href="/convert/json-to-csv" className="link mr-1">JSON to CSV</a>,&nbsp;<a className="link mr-1" href="/convert/json-to-yaml">JSON to YAML</a>,&nbsp;<a className="link mr-1" href="/convert/json-to-base64">JSON to Base64</a>,&nbsp;
                  <a href="/convert/json-to-html" className="link">JSON to  HTML</a>.</span>
              </li>
              <li>
                <strong>JSON Formatting: </strong>
                <span>Keep your JSON data organized with our formatting tools that ensure readability and consistency.</span>
              </li>
              <li>
                <strong>JSON Lint: </strong>
                <span>Provide a simple and efficient <a href="/jsonlint" className="link">json lint tool </a>to find any json data syntax errors.</span>
              </li>
              <li>
                <strong>JSON Diff: </strong>
                <span>Use <a href="/diff" className="link">json diff tool</a> to Compare two JSON files and identify the differences between them.</span>
              </li>
              <li>
                <strong>JSON Path: </strong>
                <span>Use <a href="/jsonpath" className="link">json path tool</a> to query and extract data from JSON documents using JSONPath expressions. </span>
              </li>
              <li><strong>JSON Tutorial: </strong>There are some simple <a href="/docs/what-is-json" className="link">json tutorials</a> to help learn some basic knowledge json.</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}