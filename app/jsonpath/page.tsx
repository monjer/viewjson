import React from 'react';
import Content from './content';
import { connection } from 'next/server';
import Article from '@/components/Article';

export default async function Page() {
  await connection();
  return (
    <div>
      <Article className={'mt-10'}>
        <h1 className="text-4xl text-center  mb-4">
          Online JSONPath Evaluator & Syntax Tester
        </h1>
        <p className="text-center m-auto   mb-10 max-w-3xl">
          Test and validate your <strong>JSONPath</strong> expressions with our online JSONPath Evaluator tool.
          Instantly query JSON data, check your syntax, and see real-time results to ensure your JSONPath is correct and accurate.
        </p>
      </Article>
      <Content />
      <Article className="max-w-4xl mx-auto py-12">
        <div className="text-left space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">What is JSONPath?</h2>
            <p className="">
              JSONPath is a query language for JSON, similar to XPath for XML.
              It allows you to navigate and extract specific values from complex JSON structures
              using simple path expressions like <code className="px-1 rounded">$.store.book[0].title</code>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">How to Use JSONPath</h2>
            <ol className="list-decimal list-inside  space-y-1">
              <li>Paste your JSON data into the input area.</li>
              <li>Enter a JSONPath expression (e.g. <code className="px-1 rounded">$.items[*].name</code>).</li>
              <li>View the matched results and verify your JSONPath syntax.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Key Features</h2>
            <ul className="space-y-1 ">
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Real-time JSONPath syntax validation</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Highlight errors in incorrect expressions</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Fast, browser-based, and completely free</li>
              <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Perfect for learning and debugging JSONPath queries</li>
            </ul>
          </div>
        </div>
      </Article>

    </div>

  );
}

