import React, { Suspense } from 'react';
import Content from './content';
import { Metadata } from 'next';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  );
}

export const metadata: Metadata = {
  title: 'viewjson - Convert JSON to CSV',
  description: 'Convert JSON string to CSV and vice versa.',
  keywords: 'JSON To CSV, CSV To JSON, JSON Converter, json online tool',
};