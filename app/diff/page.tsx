'use client';
import React, { useState } from 'react';
import DiffEditor from '@/components/DiffEditor';
import Flex from '@/components/Flex';
import PageTitle from '@/components/PageTitle';

export default function Page() {
  const [originalCode, setOriginalCode] = useState('');
  const [modifiedCode, setModifiedCode] = useState('');

  return (
    <>
      <Flex>
        <PageTitle title="JSON Diff" />
      </Flex>

      <DiffEditor
        originalCode={originalCode}
        modifiedCode={modifiedCode}
        onOriginalChange={setOriginalCode}
        onModifiedChange={setModifiedCode}
      />
    </>
  );
}
