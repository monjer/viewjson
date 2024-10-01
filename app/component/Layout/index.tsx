import React from "react";
import { Flex, Theme } from '@radix-ui/themes';

import Header from "../Header";
import './index.scss';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Theme appearance="light" radius="small" scaling="90%" accentColor="indigo">
      <Flex
        style={{
          flexDirection: 'column',
          height: '100vh',
        }}>
        <Header />
        <main className="app-main">
          {children}
        </main>
      </Flex>
    </Theme>
  );
}
export default Layout;