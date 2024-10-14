
import React from 'react'
import Layout from '@/component/Layout'
import type { Metadata } from 'next'
import './global.scss';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'view-json',
  description: 'view-json, a tool to view json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white text-black text-base dark:bg-gray-900 dark:text-gray-300'>
        <Layout>
          {children}
        </Layout>
      </body>
      <GoogleAnalytics gaId="G-V3525DMF56" />
    </html >
  )
}