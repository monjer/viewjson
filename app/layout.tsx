
import React from 'react';
import Layout from '@/slots/Layout';
import type { Metadata } from 'next';
import './global.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'viewjson - json viewer, json formatter, json data converter, json diff, json lint, json schema validator',
  description: 'A free json online tools : json viewer, json beautifier, json formatter, json data converter, json diff, json lint, json schema validator, json tutorial.',
  keywords: "online json viewer, json beautifier, json formatter, json diff, json validator, json data converter, json schema validator, json tutorial, json beautifier online",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5347284824666460"
          crossOrigin="anonymous"></Script>
      </head>
      <body className='relative overflow-auto  text-gray-700	 bg-white dark:bg-gray-950 dark:text-gray-400'>
        <ThemeProvider attribute="class">
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
        {
          process.env.ENABLE_ANALYSIS && <GoogleAnalytics gaId="G-V3525DMF56" />
        }
      </body>
    </html >
  );
}