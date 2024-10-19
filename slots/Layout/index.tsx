'use client'
import React from "react";
import Flex from '@/components/Flex'
import Header from "../Header";
import useDarkMode from "@/hooks/useDarkMode";
import './index.scss';

function Layout({ children }: { children: React.ReactNode }) {

  const [darkMode] = useDarkMode();

  return (
    <Flex
      className="gap-y-0"
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