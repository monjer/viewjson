'use client';
import React from "react";
import Header from "../Header";
import Link from "next/link";
import Article from "@/components/Article";
import './index.scss';


function Layout({ children }: { children: React.ReactNode }) {
  const date = new Date().getFullYear();
  return (
    <div className="app-page">
      <Header />
      <main className="page-main w-full m-auto md:w-[80vw] mb-20">
        {children}
      </main>
      <footer className="page-footer w-full my-8">
        <Article>
          <p className="text-center">©{date} viewjson.online. All rights reserved.
            <Link href="/about" className='ml-2'>About</Link>
            <a href="/privacy" className="ml-2">Privacy Policy</a>
            <Link href="/terms" className='ml-2'>Terms of Service</Link>
          </p>
        </Article>
      </footer>
    </div>
  );
}
export default Layout;