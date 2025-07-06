import React from "react";
import Content from './Content';

export default function Page() {
  return (
    <div className="mt-4">
      <Content />
      <article>
        <h2>What is JSON?</h2>
        <p> JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It
          is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language
          independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.
          These properties make JSON an ideal data-interchange language.</p>
        <h2>Why use JSON?</h2>
        <div>
          <ul>
            <li><strong>Human-Readable:</strong> JSON is easy to read and understand, making it accessible for developers and non-developers alike.</li>
            <li><strong>Lightweight:</strong> JSON is a lightweight format, which means it requires less bandwidth and storage compared to other formats like XML.</li>
            <li><strong>Language-Independent: </strong>JSON can be used with virtually any programming language, making it a versatile choice for data interchange.</li>
            <li><strong>Structured Data:</strong> JSON supports complex data structures, including nested objects and arrays, allowing for rich data representation.</li>
            <li><strong>Widely Supported:</strong> JSON is widely supported by web APIs and services, making it a standard choice for data exchange on the web.</li>
          </ul>
        </div>
        <h2>Structure and Syntax</h2>

        <div className="space-y-8">
          <section>
            <h4 className="font-semibold mb-2">1. Primitive Types</h4>
            <p className="mb-2">JSON supports these primitive data types:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto dark:bg-gray-800">
              {`{
  "string": "Hello World",        // Text data
  "number": 42,                   // Integer
  "float": 3.14159,              // Decimal number
  "boolean": true,                // true or false
  "null": null                    // Null value
}`}
            </pre>
          </section>

          <section>
            <h4 className="font-semibold mb-2">2. Arrays</h4>
            <p className="mb-2">Arrays are ordered collections of values:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto dark:bg-gray-800">
              {`{
  "empty": [],                    // Empty array
  "numbers": [1, 2, 3, 4, 5],     // Number array
  "strings": ["red", "green"],    // String array
  "mixed": [1, "hello", true],    // Mixed types
  "nested": [[1, 2], [3, 4]]      // Nested arrays
}`}
            </pre>
          </section>

          <section>
            <h4 className="font-semibold mb-2">3. Objects</h4>
            <p className="mb-2">Objects are collections of key-value pairs:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto dark:bg-gray-800">
              {`{
  "person": {
    "name": "John Doe",
    "age": 30,
    "address": {
      "street": "123 Main St",
      "city": "Boston"
    }
  }
}`}
            </pre>
          </section>

          <section>
            <h4 className="font-semibold mb-2">4. Complex Example</h4>
            <p className="mb-2">Real-world JSON often combines multiple types:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto dark:bg-gray-800">
              {`{
  "id": 1001,
  "active": true,
  "name": "Product X",
  "price": 99.99,
  "tags": ["new", "sale"],
  "stock": {
    "warehouse": 50,
    "retail": 10
  },
  "variations": [
    {
      "color": "red",
      "size": "M",
      "available": true
    },
    {
      "color": "blue",
      "size": "L",
      "available": false
    }
  ]
}`}
            </pre>
          </section>
        </div>
        <h2>Common JSON Errors</h2>
        <div className="space-y-8">
          <section>
            <h4 className="font-semibold mb-2">1. Missing or Extra Commas</h4>
            <p className="mb-2">Commas must separate array elements and object properties, but shouldn't appear after the last item:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto dark:bg-gray-800 text-red-500">
              {`{
  "name": "John",   // Correct
  "age": 30,       // Correct
  "city": "Boston", // Extra comma - ERROR!
}`}
            </pre>
          </section>

          <section>
            <h4 className="font-semibold mb-2">2. Single Quotes Instead of Double Quotes</h4>
            <p className="mb-2">JSON requires double quotes for strings:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto dark:bg-gray-800 text-red-500">
              {`{
  'name': 'John',  // ERROR! Single quotes not allowed
  "age": 30
}`}
            </pre>
          </section>

          <section>
            <h4 className="font-semibold mb-2">3. Including Functions or Undefined</h4>
            <p className="mb-2">JSON doesn't support functions or undefined values:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto dark:bg-gray-800 text-red-500">
              {`{
  "name": "John",
  "callback": function() {},  // ERROR! Functions not allowed
  "status": undefined        // ERROR! undefined not allowed
}`}
            </pre>
          </section>

          <section>
            <h4 className="font-semibold mb-2">4. Unquoted Property Names</h4>
            <p className="mb-2">All object property names must be quoted:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto dark:bg-gray-800 text-red-500">
              {`{
  name: "John",    // ERROR! Missing quotes around property name
  "age": 30
}`}
            </pre>
          </section>

          <section>
            <h4 className="font-semibold mb-2">5. Invalid Number Formats</h4>
            <p className="mb-2">Numbers can't start with multiple zeros or use certain notations:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto dark:bg-gray-800 text-red-500">
              {`{
  "amount": 01.50,        // ERROR! Leading zero
  "hex": 0xFF,           // ERROR! Hex not allowed
  "scientific": 1.23e5,  // Valid scientific notation
  "infinity": Infinity   // ERROR! Infinity not allowed
}`}
            </pre>
          </section>

          <section>
            <h4 className="font-semibold mb-2">6. Comments in JSON</h4>
            <p className="mb-2">JSON doesn't support comments:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto dark:bg-gray-800 text-red-500">
              {`{
  // This is a comment     ERROR!
  "name": "John",
  "age": 30              /* Block comment - ERROR! */
}`}
            </pre>
          </section>

          <section>
            <h4 className="font-semibold mb-2">7. Unclosed Structures</h4>
            <p className="mb-2">All arrays and objects must be properly closed:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto dark:bg-gray-800 text-red-500">
              {`{
  "name": "John",
  "items": [
    "apple",
    "orange"    // ERROR! Missing closing bracket
  "age": 30
`}
            </pre>
          </section>
        </div>
      </article>
      <article>
        <h2>About viewjson.online</h2>
        <p>viewjson is an online json viewer, json beautifier, json formatter, json data converter, json diff, json validator tools.</p>
        <section className="features">
          <div className="container">
            <h3>Features</h3>
            <ul className="feature-list">
              <li>
                <h3>JSON Basic Process</h3>
                <p>Provide some basic json data process methods daily used, such as json minify, json prettify, json highlight.</p>
              </li>
              <li>
                <h3>JSON Conversion</h3>
                <p>Easily convert JSON data to and from various formats, including <a href="/convert/json-to-xml" className="link">JSON to XML</a>,
                  <a href="/convert/json-to-csv" className="link">JSON to CSV</a>, <a className="link" href="/convert/json-to-yaml">JSON to YAML</a>, <a className="link" href="/convert/json-to-base64"> JSON to Base64</a>,
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
              <li>
                <h3>JSON Path</h3>
                <p>Use <a href="/jsonpath" className="link">json path tool</a> to query and extract data from JSON documents using JSONPath expressions. </p>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}