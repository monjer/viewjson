import React from 'react';
import Content from './content';
import { connection } from 'next/server';
import { Metadata } from 'next';
import Article from '@/components/Article';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://viewjson.online/jsonlint",
  },
};

export default async function Page() {
  await connection();
  return (
    <div>
      <Article className={'mt-10'}>
        <h1 className="text-3xl font-bold  text-center mb-6">JSON Lint Online Tool</h1>
        <p className=" mb-4 max-w-3xl m-auto text-center">
          Our <strong>JSON Lint</strong> tool helps developers and data analysts validate and debug JSON data effortlessly.
          JSON (JavaScript Object Notation) is a widely used data format for APIs and web applications, but even small syntax errors can break your code.
          This tool quickly checks your JSON syntax and highlights any issues, so you can fix them instantly.
        </p>
      </Article>
      <Content />
      <Article>
        <section className="mx-auto px-4">
          <h2 className="text-2xl">What is JSON Lint</h2>
          <p className=" mb-4">
            JSON Lint is a validator and formatter for JSON data. It analyzes your JSON input and ensures it is properly structured according to JSON standards.
            Whether you are working with API responses, configuration files, or structured data, JSON Lint makes it easy to detect
            missing commas, unmatched brackets, and other syntax errors.
          </p>

          <h2 className="text-2xl">How to Use JSON Lint</h2>
          <ol className="list-decimal list-inside  space-y-2">
            <li>Paste or write your JSON data into the input editor on the page.</li>
            <li>After pasting , the editor will automatically trigger the linting process.</li>
            <li>If errors are found, they will be highlighted with line numbers and error messages.</li>
            <li>Fix any issues and re-run the validation until your JSON is error-free.</li>
          </ol>

          <p className="mt-6">
            Use this online JSON Lint tool to save time and ensure your data is always clean and valid. It’s fast, free, and works directly in your browser — no installation required.
          </p>
        </section>

      </Article>
    </div>
  );
}
