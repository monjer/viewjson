'use client';
import React from "react";
import Header from "../Header";

import './index.scss';

function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
      <main className="page-main">
        {children}
      </main>
      <footer>
        <p className="text-center my-4">©2024 viewjson.online. All rights reserved.</p>
      </footer>
    </>
  );
}
export default Layout;