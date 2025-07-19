"use client";

import React from 'react';
import Flex from '@/components/Flex';
import Dialog from '@/components/Dialog';
import { useTheme } from 'next-themes';
import ResponseContainer from '../ResponseContainer';
import Navbar from '@/components/Navbar';
import { pathToRegexp } from 'path-to-regexp';
import { usePathname } from 'next/navigation';
import './index.scss';
import Logo from './Logo';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [activeKeys, setActiveKeys] = React.useState([]);


  const navs = [
    {
      label: "JSON Convert",
      key: "/convert",
      highlights: ["/convert/:type"],
      items: [
        {
          label: "JSON to XML",
          key: "/convert/json-to-xml",
        },
        {
          label: "JSON to YAML",
          key: "/convert/json-to-yaml",
        },
        {
          label: "JSON to CSV",
          key: "/convert/json-to-csv",
        },
        {
          label: "JSON to Base64",
          key: "/convert/json-to-base64",
        },
        {
          label: "JSON to HTML",
          key: "/convert/json-to-html",
        },
      ],
    },
    {
      label: "JSON Diff",
      key: "/diff",
    },
    {
      label: "JSON Lint",
      key: "/jsonlint",
    },
    {
      label: "JSONPath Evaluator",
      key: "/jsonpath",
    },
    {
      label: "JSON Tutorial",
      key: "/docs/what-is-json",
      highlights: ["/docs/:docs"],
    }];

  React.useEffect(() => {
    function findActiveKeys(item) {
      const isItemActive = (item) => {
        const { highlights, key } = item;
        let isActive = false;
        if (highlights) {
          isActive = highlights.some((highlight) => {
            const { regexp } = pathToRegexp(highlight);
            const result = regexp.test(pathname);
            return result;
          });
        } else {
          isActive = pathToRegexp(key).regexp.test(pathname);
        }
        return isActive;
      };
      const search = (item, activeKeys = []) => {
        if (Array.isArray(item)) {
          item.forEach((item) => {
            if (isItemActive(item)) {
              activeKeys.push(item.key);
            }
            if (item.items?.length > 0) {
              search(item.items, activeKeys);
            }
          });
        } else {
          if (isItemActive(item)) {
            activeKeys.push(item.key);
          }
        }
      };
      const activeKeys = [];
      search(item, activeKeys);
      return activeKeys;
    }
    const activeKeys = findActiveKeys(navs);
    setActiveKeys(activeKeys || []);
  }, [pathname]);


  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <div className='app-header-container sticky top-0 z-10 border-b bg-white dark:bg-gray-950/150 dark:border-gray-800 backdrop-blur-[22px]'>
      <ResponseContainer className='app-header flex-grow flex items-center position-relative  '>
        <Flex className="justify-between w-full" align='center'>
          <Flex align='center' className='grow'>
            <a href='/' className='mr-4'>
              <Flex align='center' className='cursor-pointer'>
                <Logo key={theme} />
                <h2 className="text-2xl  text-black m-0 dark:text-white font-bold">viewjson</h2>
              </Flex>
            </a>
            <Navbar items={navs} activeKeys={activeKeys} />
          </Flex>
          <Flex>
            <span onClick={onChangeTheme} className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6 hidden dark:block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 dark:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            </span>
          </Flex>
          <Dialog title={"About"} open={open} onClose={() => setOpen(false)} onCancel={() => setOpen(false)}>
            viewjson is a tool to view json data.
          </Dialog>
        </Flex>
      </ResponseContainer>
    </div >
  );
}