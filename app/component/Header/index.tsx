"use client";

import React from 'react'
import { Flex, Button, Heading, Dialog, Link, Separator } from '@radix-ui/themes';
import './index.scss';

export default function Header() {
  return (
    <div className='app-header-container'>
      <div className='app-header'>
        <Flex justify="between" align="center">
          <Heading size="2" style={{ margin: '0', fontWeight: 600, }}>
            view-json
          </Heading>
          <Dialog.Root >
            <Dialog.Trigger>
              <Link style={{ cursor: 'pointer' }} size="1" color="gray">About</Link>
            </Dialog.Trigger>
            <Dialog.Content maxWidth="450px">
              <Dialog.Title>About </Dialog.Title>
              <Dialog.Description >
                view-json is a tool to view json data.
              </Dialog.Description>

              <Flex direction="column" gap="3">

              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    OK
                  </Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </Flex>
      </div>
    </div>
  );
}