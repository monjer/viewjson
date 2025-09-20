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
          Online JSON ⇄ CSV Converter Tool
        </h1>
        <p className="max-w-3xl mb-10 m-auto text-center">
          Convert between <strong>JSON</strong> and <strong>CSV</strong> instantly
          with this free online tool. Whether you need to handle tabular data,
          API responses, or structured records, this JSON to CSV and CSV to JSON
          converter helps you transform data quickly, accurately, and efficiently.
        </p>
      </Article>
      <Content />
      <Article>
        <div className="mb-10">
          <h2>
            JSON vs CSV: What’s the Difference?
          </h2>
          <p className="mb-3">
            <strong>JSON (JavaScript Object Notation)</strong> is a structured,
            hierarchical format ideal for APIs and complex data. It supports
            nested objects and arrays, making it suitable for modern applications.
          </p>
          <p>
            <strong>CSV (Comma-Separated Values)</strong> is a simple tabular
            format where data is stored in rows and columns, separated by commas.
            It is widely used for spreadsheets, data analysis, and importing or
            exporting information between systems.
          </p>
        </div>
        <div className="mb-10">
          <h2>
            When to Use
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Convert API JSON responses into CSV for Excel or Google Sheets.</li>
            <li>Transform CSV files into JSON for web apps or databases.</li>
            <li>Analyze tabular data by switching formats between CSV and JSON.</li>
            <li>Prepare structured data for reporting, migration, or integration.</li>
          </ul>
        </div>
        <div className="mb-10">
          <h2>
            How to Use
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Paste your JSON or CSV data into the input editor.</li>
            <li>Select the conversion direction: JSON → CSV or CSV → JSON.</li>
            <li>Click the <span className="font-semibold">"Convert"</span> button to process the data.</li>
            <li>Copy or download the converted result instantly.</li>
          </ol>
        </div>
      </Article>
    </>
  );
}

export const metadata: Metadata = {
  title: 'viewjson - Convert JSON to CSV',
  description: 'Convert JSON string to CSV and vice versa.',
  keywords: 'JSON To CSV, CSV To JSON, JSON Converter, json online tool',
};