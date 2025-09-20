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
          Online JSON ⇄ Base64 Converter Tool
        </h1>

        {/* Intro */}
        <p className="max-w-3xl mb-10 m-auto text-center">
          Convert between <strong>JSON</strong> and <strong>Base64</strong>
          quickly and securely with this free online tool. Whether you need to
          encode JSON into Base64 for transmission or decode Base64 back into
          JSON for analysis, this converter provides a fast and reliable solution.
        </p>
      </Article>
      <Content />
      <Article>
        <div className="mb-10">
          <h2>
            When to Use
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Encode JSON data into Base64 for safe transport in URLs, APIs, or storage systems.</li>
            <li>Decode Base64 strings back into JSON to restore structured data for applications.</li>
            <li>Embed JSON in systems that only support text-based formats.</li>
            <li>Ensure data integrity when transferring JSON between different platforms.</li>
          </ul>
        </div>

        {/* How to use */}
        <div className="mb-10">
          <h2>
            How to Use
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Paste your JSON or Base64 data into the input editor.</li>
            <li>Select the conversion direction: JSON → Base64 or Base64 → JSON.</li>
            <li>Click the <span className="font-semibold">"Convert"</span> button to process the data.</li>
            <li>Copy or download the converted result instantly.</li>
          </ol>
        </div>
      </Article>
    </>
  );
}

export const metadata: Metadata = {
  title: 'viewjson - Convert JSON to Base64',
  description: 'Convert JSON string to Base64 and vice versa.',
  keywords: 'JSON To Base64, Base64 To JSON, JSON Converter, json online tool',
};