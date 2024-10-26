'use client'
import React from "react";
import Flex from '@/components/Flex'
import Header from "../Header";
import useDarkMode from "@/hooks/useDarkMode";
import './index.scss';

function Layout({ children }: { children: React.ReactNode }) {

  const [darkMode] = useDarkMode();

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}
export default Layout;