import React from 'react'
import Layout from '@/app/component/Layout'
import '@radix-ui/themes/styles.css';
import './global.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html >
  )
}