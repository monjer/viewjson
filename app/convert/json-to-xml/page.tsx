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
  title: 'viewjson - Convert JSON to XML',
  description: 'Convert JSON string to XML and vice versa.',
  keywords: 'JSON To XML, XML To JSON, JSON Converter, online tool',
};