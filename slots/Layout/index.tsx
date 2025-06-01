'use client';
import React from "react";
import Header from "../Header";

import './index.scss';

function Layout({ children }: { children: React.ReactNode }) {
  const date = new Date().getFullYear();
  return (
    <div className="app-page">
      <Header />
      <main className="page-main mb-20">
        {children}
      </main>
      <footer>
        <p className="text-center my-8">©{date} viewjson.online. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default Layout;