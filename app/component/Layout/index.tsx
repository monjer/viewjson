import React from "react";
import { Flex } from "antd";
import Header from "../Header";
import './index.scss';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      style={{
        flexDirection: 'column',
        height: '100vh',
      }}>
      <Header />
      <main className="app-main">
        {children}
      </main>
    </Flex>
  );
}
export default Layout;