'use client';
import React, { useState } from 'react';
import DiffEditor from '@/components/DiffEditor';
import Article from '@/components/Article';

export default function Page() {
  const [originalCode, setOriginalCode] = useState('');
  const [modifiedCode, setModifiedCode] = useState('');

  return (
    <>
      <Article className='mt-10'>
        <h1 className="text-3xl text-center">
          JSON Diff Online Tool
        </h1>
        <p className="text-center m-auto max-w-3xl">
          Compare two JSON files or data blocks side by side with our{" "}
          <strong>JSON Diff</strong> tool. Instantly detect differences in keys,
          values, or structure, and visualize changes to ensure your JSON data is
          accurate, consistent, and error-free. Perfect for debugging APIs,
          configuration files, or collaborative development.
        </p>
      </Article>

      <DiffEditor
        originalCode={originalCode}
        modifiedCode={modifiedCode}
        onOriginalChange={setOriginalCode}
        onModifiedChange={setModifiedCode}
      />
      <Article className="max-w-4xl mx-auto py-12">
        <div className="mb-10">
          <h2 >
            What is JSON Diff?
          </h2>
          <p>
            JSON Diff is a utility that highlights differences between two JSON
            objects. Instead of manually scanning large JSON data, this tool
            automatically pinpoints additions, deletions, and modifications.
            Developers often use JSON Diff for comparing API responses, verifying
            configuration updates, or spotting errors in complex JSON structures.
          </p>
        </div>
        <div >
          <h2 >
            How to Use JSON Diff
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Paste the first JSON data into the left editor.</li>
            <li>Paste the second JSON data into the right editor.</li>
            <li>The diff tool will automatically compare the two JSON objects.</li>
            <li>
              View the highlighted results to see differences in keys, values, and
              structure.
            </li>
            <li>
              Make corrections or adjustments based on the detected differences.
            </li>
          </ol>
        </div>
      </Article>

    </>
  );
}
