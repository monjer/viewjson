"use client";

import React from 'react'
import Flex from '@/component/Flex'
import Dialog from '@/component/Dialog'
import Button from '@/component/Button'


export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const onClick = () => {
    setOpen(true);
  }

  const onChangeTheme = () => {
    setDarkMode((pre) => {
      return !pre
    });
    const root = document.body as HTMLElement;
    if (darkMode) {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }

  return (
    <div className='app-header-container'>
      <div className='app-header px-4 py-3 border-b dark:border-gray-600'>
        <Flex className="justify-between">
          <h1 className="text-lg font-bold">view-json</h1>
          <Flex>
            <span onClick={onChangeTheme} className='cursor-pointer'>
              {darkMode ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>

                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              }
            </span>
            <Button type="text" onClick={onClick}>About</Button>
          </Flex>

          <Dialog title={"About"} open={open} onClose={() => setOpen(false)} onCancel={() => setOpen(false)}>
            view-json is a tool to view json data.
          </Dialog>
        </Flex>
      </div>
    </div >
  );
}