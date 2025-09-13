import React from 'react';
import Content from './content';
import { Metadata } from 'next';
import { connection } from 'next/server';

export default async function Page() {
  await connection();
  return <Content />;
}

export const metadata: Metadata = {
  title: 'viewjson - Convert JSON to Base64',
  description: 'Convert JSON string to Base64 and vice versa.',
  keywords: 'JSON To Base64, Base64 To JSON, JSON Converter, json online tool',
};