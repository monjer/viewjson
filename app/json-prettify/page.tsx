import Article from '@/components/Article';
import React from 'react';
import { Metadata } from 'next';

export default function Page() {
  return (
    <Article className="!max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl font-bold">JSON Prettify - Easy JSON Viewer for Chrome</h1>
        <p className="!text-xl mt-4 max-w-2xl mx-auto">
          View, format, and explore JSON responses directly in your browser with JSON Prettify.
          A powerful Chrome extension that makes working with JSON simple and efficient.
        </p>
        <div className="mt-6">
          <a
            target='_blank'
            href="https://chromewebstore.google.com/detail/json-prettify/bfgndacalpcbadebnobmcljbjnccebgk"
            className="inline-block font-semibold py-3 px-6 rounded border border-gray-200 shadow-md transition dark:border-gray-700"
          >
            Install JSON Prettify on Chrome
          </a>
        </div>
      </section>
      <img src="/images/banner.png" />
      {/* Features Section */}
      <h2 className="!mb-6 text-center"> Key Features</h2>
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        {[
          {
            title: "JSON Syntax Highlighting",
            desc: "Beautiful syntax highlighting for easy reading and debugging of JSON responses.",
          },
          {
            title: "Customizable Fonts",
            desc: "Choose from multiple font styles, sizes, and weights for a personalized experience.",
          },
          {
            title: "Themes",
            desc: "Easily switch between 83 light themes and 207 dark themes for any environment.",
          },
          {
            title: "Cross-Tab Sync",
            desc: "Automatically sync your settings across multiple Chrome tabs.",
          },
          {
            title: "Big Number Support",
            desc: "Accurate display of large numbers without truncation.",
          },
          {
            title: "Tree View Navigation",
            desc: "Expand and collapse JSON nodes for structured data visualization.",
          },
          {
            title: "Indentation Control",
            desc: "Customize indentation size and guide lines for better readability.",
          },
          {
            title: "Local File Preview",
            desc: "Open and preview local JSON files directly in your browser.",
          },
          {
            title: "Toggle Formatting",
            desc: "Easily switch between raw and formatted JSON views.",
          },
          {
            title: "One-Click Copy",
            desc: "Quickly copy formatted JSON text to your clipboard.",
          },
          {
            title: "Friendly Side Panel",
            desc: "Manage settings from a modern, user-friendly side panel.",
          },
          {
            title: "Clickable Links",
            desc: "Clickable URLs inside JSON strings for faster navigation.",
          },
        ].map((feature, idx) => (
          <div key={idx} className="p-6 rounded shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="!mb-2 !mt-0 font-bold !text-lg">{feature.title}</h3>
            <p className="!mb-0">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Demo Section */}
      <section className="mb-16 text-center">
        <h2 className='mb-4'>Test JSON Prettify Online</h2>
        <p className="mt-2">
          Try JSON Prettify with real-world API examples:
        </p>
        <ul className="mt-4 space-y-2 list-none">
          <li>
            <a
              href="https://jsonplaceholder.typicode.com/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://jsonplaceholder.typicode.com/posts
            </a>
          </li>
          <li>
            <a
              href="https://jsonplaceholder.typicode.com/comments"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://jsonplaceholder.typicode.com/comments
            </a>
          </li>
        </ul>
      </section>

      {/* Feedback & Support Section */}
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="p-6 rounded border border-gray-200 dark:border-gray-700 shadow-md">
          <h2 className="!text-lg font-semibold !mb-2 !mt-0">Report Issues</h2>
          <p className="!mb-0">
            Found a bug? Submit issues on{" "}
            <a
              href="https://github.com/monjer/json-prettify/issues"
              className="underline"
            >
              GitHub Issues
            </a>{" "}
            or contact me on{" "}
            <a href="https://x.com/manjun_han" className="underline">
              Twitter
            </a>.
          </p>
        </div>
        <div className="p-6 rounded border border-gray-200 dark:border-gray-700 shadow-md">
          <h2 className="!text-lg font-semibold !mb-2 !mt-0">Support Development</h2>
          <p className="!mb-0">
            If you like JSON Prettify, consider supporting me on{" "}
            <a
              href="https://paypal.me/supportmonjerdev/9.9"
              className="underline"
            >
              PayPal
            </a>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center">
        <a
          href="https://chromewebstore.google.com/detail/json-prettify/bfgndacalpcbadebnobmcljbjnccebgk"
          className="inline-block font-semibold py-3 px-6 rounded border border-gray-200 shadow-md transition"
          target="_blank"
        >
          Get JSON Prettify Now
        </a>
      </section>
    </Article>
  );
}

export const metadata: Metadata = {
  title: 'JSON Prettify - Easy JSON Viewer for Chrome',
  description: 'View, format, and explore JSON responses directly in your browser with JSON Prettify. A powerful Chrome extension that makes working with JSON simple and efficient.',
  keywords: 'JSON Prettify, JSON Viewer, Chrome extension, JSON syntax highlighting, customizable fonts, themes, cross-tab sync, big number support, tree view navigation, indentation control, local file preview, toggle formatting, one-click copy, friendly side panel, clickable links',
};