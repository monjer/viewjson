
import React from 'react';
import Content from './content';
import { Metadata } from 'next';
import { connection } from 'next/server';
import Article from '@/components/Article';


export default async function Page() {
  await connection();
  return (
    <>
      <Article className='mt-10 text-center'>
        <h1>
          Online JSON to HTML Table Converter Tool
        </h1>
        {/* Intro */}
        <p className="max-w-3xl m-auto mb-10 text-center">
          Convert <strong>JSON</strong> data into clean and structured
          <strong> HTML tables</strong> instantly with this free online tool.
          Whether you need to visualize JSON data in a readable format or export
          tables for web pages, this JSON to HTML Table converter makes it simple
          and efficient.
        </p>
      </Article>
      <Content />
      <Article>
        <div className="mb-10">
          <h2>
            When to Use
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Convert API JSON responses into HTML tables for reports or dashboards.</li>
            <li>Display JSON data directly on web pages without writing manual markup.</li>
            <li>Transform JSON records into tabular format for better readability.</li>
            <li>Export HTML tables back into JSON for data processing or storage.</li>
          </ul>
        </div>

        {/* How to use */}
        <div className="mb-10">
          <h2>
            How to Use
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Paste your JSON data into the input editor.</li>
            <li>Select the conversion direction: JSON → HTML Table .</li>
            <li>Click the <span className="font-semibold">"Convert"</span> button to process the data.</li>
            <li>Preview, copy, or download the converted table or JSON instantly.</li>
          </ol>
        </div>
      </Article>
    </>
  );
}

export const metadata: Metadata = {
  title: "Online JSON to HTML Table Converter Tool - Convert JSON Data to HTML Tables",
  description: "Free online tool to convert JSON data into clean and structured HTML tables instantly. Perfect for visualizing API responses, creating web reports, and displaying JSON data in readable tabular format.",
  alternates: {
    canonical: "https://viewjson.online/convert/json-to-html",
  },
  keywords: [
    "JSON to HTML table",
    "JSON converter",
    "HTML table generator",
    "JSON data visualization",
    "API response to HTML",
    "JSON to web table",
    "online JSON converter",
    "data to HTML table",
    "JSON formatting tool",
    "web development tool",
    "data visualization",
    "tabular data converter",
  ],
};