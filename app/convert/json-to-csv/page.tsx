import React from 'react';
import Content from './content';
import { Metadata } from 'next';
import { connection } from 'next/server';

export default async function Page() {
  await connection();
  return (
    <Content />
  );
}

export const metadata: Metadata = {
  title: 'viewjson - Convert JSON to CSV',
  description: 'Convert JSON string to CSV and vice versa.',
  keywords: 'JSON To CSV, CSV To JSON, JSON Converter, json online tool',
};