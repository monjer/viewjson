
import React, { Suspense } from 'react';
import Content from './content';
import { Metadata } from 'next';

export default function Page() {
  return <Suspense fallback={<div>Loading...</div>}>
    <Content />
  </Suspense>;
}

export const metadata: Metadata = {
  title: 'viewjson - Convert JSON to HTML table',
  description: 'Convert JSON string to HTML table and vice versa.',
  keywords: 'JSON To HTML Table, JSON Converter, json online tool',
};