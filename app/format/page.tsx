import React from "react";
import Content from './Content';
import Article from "@/components/Article";
import FAQ from "./FAQ";
import Datasets from "./Datasets";

export default function Page() {
  return (
    <div className="mt-4">
      <Content />
      <div className="max-w-4xl mx-auto">
        <Article>
          <h1 className="text-center mb-8 mt-20">About viewjson.online</h1>
          <p>viewjson.online is a free online json viewer, json beautifier, json formatter, json data converter, json diff, json path checker, json validator tools.</p>
          <section className="features">
            <div className="container">
              <ul className="feature-list">
                <li>
                  <strong>JSON Basic Process: </strong>
                  <span>Provide some basic json data process methods daily used, such as json minify, json format, json stringify, json highlight.</span>
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
                  <span>Provide a simple and efficient <a href="/jsonlint" className="link">json lint tool </a>to find any json data syntax errors and fix them.</span>
                </li>
                <li>
                  <strong>JSON Diff: </strong>
                  <span>Use <a href="/diff" className="link">json diff tool</a> to compare two JSON files and identify the differences between them.</span>
                </li>
                <li>
                  <strong>JSON Path: </strong>
                  <span>Use <a href="/jsonpath" className="link">json path tool</a> to query and extract data from JSON documents using JSONPath expressions. </span>
                </li>
                <li><strong>JSON Tutorial: </strong>There are some simple <a href="/docs/what-is-json" className="link">json tutorials</a> to help learn some basic knowledge json.</li>
              </ul>
            </div>
          </section>
        </Article>
        <Article className="mt-8">
          <Datasets />
        </Article>
        <Article>
          <FAQ />
        </Article>
      </div>
    </div>
  );
}