import React from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Button, ConfigProvider } from 'antd';
import Layout from '@/app/component/Layout'
import './global.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <ConfigProvider
          theme={{
            token: {
              fontSize: 12,
              borderRadius: 2,
            }
          }}>
          <Layout>
            {children}
          </Layout>
        </ConfigProvider>
      </body>
    </html >
  )
}