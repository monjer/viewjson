'use client'
import React from 'react'
import Layout from '@/component/Layout'
import './global.scss';

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
    </html >
  )
}