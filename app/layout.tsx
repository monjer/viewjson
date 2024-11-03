
import React from 'react';
import Layout from '@/slots/Layout';
import type { Metadata } from 'next';
import './global.scss';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes';


export const metadata: Metadata = {
  title: 'view-json',
  description: 'view-json, a tool to view json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='relative overflow-auto bg-white text-gray-500 dark:bg-gray-950 dark:text-gray-400'>
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