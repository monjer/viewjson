import React from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is JSON?",
    answer:
      "JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.",
  },
  {
    question: "What can I do with this website?",
    answer: <span>You can view, format, and convert JSON data. Our tools help you beautify, compress, <a href="/jsonlint" target="_blank" title="JSON Lint">validate</a>, and transform JSON to other formats like <a href="/convert/json-to-xml" target="_blank" title="JSON to XML">XML</a>, <a href="/convert/json-to-csv" target="_blank" title="JSON to CSV">CSV</a>, <a href="/convert/json-to-yaml" target="_blank" title="JSON to YAML">YAML</a>, <a href="/convert/json-to-base64" target="_blank" title="JSON to Base64">Base64</a>, and <a href="/convert/json-to-html" target="_blank" title="JSON to HTML">HTML Table</a>. You can also use our <a href="/jsonpath" target="_blank" title="JSON path chekcer">JSONPath chekcer</a> tool to extract data from JSON documents. And use our <a href="/jsondiff" target="_blank" title="JSON diff">JSON diff</a> tool to compare two JSON documents.</span>,
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. All processing is done locally in your browser. We do not store or transmit your JSON data to any server.",
  },
  {
    question: "Do I need to login to use?",
    answer: "No, our site is completely free to use. You don't need to login to access any of the features.",
  },
  {
    question: "How do I validate my JSON?",
    answer: <span>Go to <a href="/jsonlint" target="_blank" title="JSON Lint">JSON Lint</a> page . Paste or upload your JSON into the editor . The tool will check for syntax errors and highlight any issues.</span>,
  },
  {
    question: "Can I convert JSON to other formats?",
    answer: <span>Yes. You can convert JSON to <a href="/convert/json-to-xml" target="_blank" title="JSON to XML">XML</a>, <a href="/convert/json-to-csv" target="_blank" title="JSON to CSV">CSV</a>, <a href="/convert/json-to-yaml" target="_blank" title="JSON to YAML">YAML</a>, <a href="/convert/json-to-base64" target="_blank" title="JSON to Base64">Base64</a>, and <a href="/convert/json-to-html" target="_blank" title="JSON to HTML">HTML Table</a> using our conversion tools.</span>,
  },
  {
    question: "Is this website free to use?",
    answer:
      "Yes. All features are free to use. No registration required.",
  },
  {
    question: "Who can I contact for support or feedback?",
    answer: <span>You can reach us via <a href="https://github.com/monjer/viewjson/issues" target="_blank" title="github issues">github issues</a> page, any feedback is welcome.</span>,
  },
];

export default function FAQ() {
  return (
    <section className="">
      <h1 className="font-bold text-center mb-8 mt-20">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="bg-white dark:bg-gray-800 rounded shadow p-4 border dark:border-gray-800 " open>
            <summary className="cursor-pointer font-semibold text-base text-gray-800 dark:text-gray-100 flex items-center justify-between">
              {faq.question}
              <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform"><ChevronDown /></span>
            </summary>
            <div className="mt-2 text-gray-700 dark:text-gray-300">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}