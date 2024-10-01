"use client";

import React from 'react'
import { Button, Flex, Typography } from 'antd';
import './index.scss';

const { Text } = Typography

export default function Header() {
  return (
    <div className='app-header'>
      <Flex justify="space-between" align="center">
        <Text style={{ margin: '0', fontWeight: 600, }}>
          view-json
        </Text>
        <Button type="link">About</Button>
      </Flex>
    </div>
  );
}