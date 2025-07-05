import Script from 'next/script';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'viewjson - Convert JSON to YAML',
  description: 'Convert JSON string to YAML and vice versa.',
  keywords: 'JSON, YAML, converter, online tool',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/fast-xml-parser/4.5.0/fxparser.min.js" strategy="beforeInteractive" />
      {children}
    </>
  );
}