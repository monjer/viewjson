import React from "react";
import Flex from '@/component/Flex'
import Header from "@/component/Header";
import useDarkMode from "@/hooks/useDarkMode";
import './index.scss';


function Layout({ children }: { children: React.ReactNode }) {

  const darkMode = useDarkMode();

  React.useEffect(() => {
    document.body.classList.remove('light');
    document.body.classList.remove('dark');
    document.body.classList.add(darkMode ? 'dark' : 'light')
  }, [darkMode]);

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