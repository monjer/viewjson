'use client';
import React from "react";
import Header from "../Header";

import './index.scss';

function Layout({ children }: { children: React.ReactNode }) {
  const date = new Date().getFullYear();
  return (
    <div className="app-page">
      <Header />
      <main className="page-main w-full m-auto md:w-[1200px] mb-20">
        {children}
      </main>
      <footer >
        <article>
          <p className="text-center my-8">©{date} viewjson.online. All rights reserved.
            <a href="/privacy" className="ml-2">Privacy Policy</a>
          </p>
        </article>
      </footer>
    </div>
  );
}
export default Layout;