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
  title: 'viewjson - Convert JSON to XML',
  description: 'Convert JSON string to XML and vice versa.',
  keywords: 'JSON To XML, XML To JSON, JSON Converter, online tool',
};