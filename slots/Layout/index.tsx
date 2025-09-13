import React from "react";
import Header from "../Header";
// import Link from "next/link";
import Article from "@/components/Article";
import './index.scss';

function Layout({ children }: { children: React.ReactNode }) {
  const date = new Date().getFullYear();
  return (
    <div className="app-page">
      <Header />
      <main className="page-main w-full m-auto md:w-[90vw] mb-20">
        {children}
      </main>
      <footer className="page-footer w-full my-8">
        <Article>
          <p className="text-center">©{date} viewjson.online. All rights reserved.
            <a href="/about" className='ml-2'>About</a>
            <a href="/privacy" className="ml-2">Privacy Policy</a>
            <a href="/terms" className='ml-2'>Terms of Service</a>
          </p>
          <div className="text-center mt-4 flex justify-center gap-4">
            <a href="https://twelve.tools" target="_blank" className="inline-block dark:hidden">
              <img src="https://twelve.tools/badge0-light.svg"
                alt="Featured on Twelve Tools" style={{ width: "140px", height: "auto" }} /></a>
            <a href="https://twelve.tools" target="_blank" className="hidden dark:inline-block">
              <img src="https://twelve.tools/badge0-dark.svg"
                alt="Featured on Twelve Tools" style={{ width: "140px", height: "auto" }} /></a>
            <a title="ai tools code.market" href="https://code.market?code.market=verified" className="inline-block dark:hidden"><img alt="ai tools code.market" title="ai tools code.market" src="https://code.market/assets/manage-product/featured-logo-bright.svg" /></a>
            <a title="ai tools code.market" href="https://code.market?code.market=verified" className="hidden dark:inline-block"><img alt="ai tools code.market" title="ai tools code.market" src="https://code.market/assets/manage-product/featured-logo-dark.svg" /></a>
          </div>
        </Article>
      </footer>
    </div>
  );
}
export default Layout;