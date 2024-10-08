import React from "react";
import Flex from '@/component/Flex'
import Header from "@/component/Header";
import './index.scss';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      className="gap-y-2"
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