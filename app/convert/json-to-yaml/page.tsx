import React from 'react';
import Content from './content';
import { connection } from 'next/server';
import Article from '@/components/Article';
import { Metadata } from 'next';


export default async function Page() {
  await connection();
  return (
    <>
      <Article className='mt-10'>
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Online JSON ⇄ YAML Converter Tool
        </h1>
        <p className="max-w-3xl m-auto mb-10 text-center">
          Convert between <strong>JSON</strong> and <strong>YAML</strong> instantly
          with this free online tool. Designed for developers and DevOps engineers,
          the converter makes it easy to transform structured data for APIs,
          configuration files, and system integrations.
        </p>

      </Article>
      <Content />
      <Article>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3">
            JSON vs YAML: What’s the Difference?
          </h2>
          <p className="mb-3">
            <strong>JSON (JavaScript Object Notation)</strong> is a strict and
            lightweight data format widely used in APIs and applications. It uses
            brackets, commas, and quoted keys to maintain structure and readability.
          </p>
          <p>
            <strong>YAML (YAML Ain’t Markup Language)</strong> is indentation-based
            and more human-friendly. It is commonly used in configuration files
            such as Kubernetes manifests, Docker Compose files, and CI/CD pipelines.
          </p>
        </div>

        {/* Use cases */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3">
            When to Use
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Convert JSON API responses into YAML for configuration files.</li>
            <li>Transform YAML DevOps configs into JSON for automation scripts.</li>
            <li>Use YAML for Kubernetes, Docker, or CI/CD workflows while keeping JSON for APIs.</li>
            <li>Debug or migrate structured data between JSON and YAML formats.</li>
          </ul>
        </div>

        {/* How to use */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3">
            How to Use
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Paste your JSON or YAML data into the input editor.</li>
            <li>Select the conversion direction: JSON → YAML or YAML → JSON.</li>
            <li>Click the <span className="font-semibold">"Convert"</span> button to generate the result.</li>
            <li>Copy or download the converted output instantly.</li>
          </ol>
        </div>
      </Article>
    </>

  );
}

export const metadata: Metadata = {
  title: "Online JSON ⇄ YAML Converter Tool - Convert JSON to YAML and Vice Versa",
  description: "Free online tool to convert between JSON and YAML instantly. Perfect for developers and DevOps engineers working with APIs, configuration files, Kubernetes manifests, and CI/CD pipelines.",
  alternates: {
    canonical: "https://viewjson.online/convert/json-to-yaml",
  },
  keywords: [
    "JSON to YAML",
    "YAML to JSON",
    "JSON converter",
    "YAML converter",
    "data format conversion",
    "configuration file converter",
    "DevOps tools",
    "Kubernetes YAML",
    "Docker Compose",
    "CI/CD pipeline",
    "API data transformation",
    "structured data converter",
    "developer tools",
  ],
};