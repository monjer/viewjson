'use client';
import React from "react";
import Header from "../Header";

import './index.scss';

function Layout({ children }: { children: React.ReactNode }) {
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