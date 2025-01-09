'use client';
import React from "react";
import Header from "../Header";

import './index.scss';

function Layout({ children }: { children: React.ReactNode }) {
  const date = new Date().getFullYear();
  return (
    <>
      <Header />
      <main className="page-main">
        {children}
      </main>
      <footer>
        <p className="text-center my-8">©{date} viewjson.online. All rights reserved.</p>
      </footer>
    </>
  );
}
export default Layout;