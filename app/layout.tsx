
import React from 'react';
import Layout from '@/slots/Layout';
import type { Metadata } from 'next';
import './global.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'viewjson - json viewer, json formatter, json data converter, json diff, json validator ',
  description: 'A free json online tools : json viewer, json beautifier, json formatter, json data converter, json diff, json validator, json tutorial.',
  keywords: "online json viewer, json beautifier, json formatter, json diff, json validator, json data converter, json tutorial",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/editor/editor.main.min.css"
        /> */}
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5347284824666460"
          crossOrigin="anonymous"></Script>
      </head>
      <body className='relative overflow-auto text-slate-600	 bg-white dark:bg-gray-950 dark:text-gray-400'>
        <ThemeProvider attribute="class">
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
        {
          process.env.ENABLE_ANALYSIS === 'true' && <GoogleAnalytics gaId="G-V3525DMF56" />
        }
      </body>
    </html >
  );
}