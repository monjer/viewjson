
import React from 'react'
import PlainJSONEditor from '@/app/component/PlainJsonEditor';
import { Flex } from 'antd';

export default function Page() {
  return (
    <Flex style={{ height: '100%' }}>
      <PlainJSONEditor />
    </Flex>
  );
}
