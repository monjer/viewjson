
import React from 'react';
import Content from './content';
import { Metadata } from 'next';
import { connection } from 'next/server';

export default async function Page() {
  await connection();
  return <Content />;
}
export const metadata: Metadata = {
  title: 'viewjson - Convert JSON to HTML table',
  description: 'Convert JSON string to HTML table and vice versa.',
  keywords: 'JSON To HTML Table, JSON Converter, json online tool',
};