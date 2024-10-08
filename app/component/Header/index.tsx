"use client";

import React from 'react'
import Flex from '@/component/Flex'
import Dialog from '@/component/Dialog'
import Button from '@/component/Button'

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const onClick = () => {
    setOpen(true);
  }

  const onChangeTheme = () => {
    const root = document.body;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }

  return (
    <div className='app-header-container'>
      <div className='app-header px-4 py-3 border dark:border-gray-600'>
        <Flex className="justify-between">
          <h1 className="text-lg font-bold">view-json</h1>
          <Button type="primary" onClick={onChangeTheme}>Dark</Button>
          <Button type="text" onClick={onClick}>About</Button>
          <Dialog title={"About"} open={open} onClose={() => setOpen(false)} onCancel={() => setOpen(false)}>
            view-json is a tool to view json data.
          </Dialog>
        </Flex>
      </div>
    </div >
  );
}