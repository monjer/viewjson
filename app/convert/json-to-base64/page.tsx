import React, { Suspense } from 'react';
import Content from './content';
import { Metadata } from 'next';

export default function Page() {
  return <Suspense fallback={<div>Loading...</div>}> <Content /></Suspense>;
}

export const metadata: Metadata = {
  title: 'viewjson - Convert JSON to Base64',
  description: 'Convert JSON string to Base64 and vice versa.',
  keywords: 'JSON To Base64, Base64 To JSON, JSON Converter, json online tool',
};