'use client';
import React, { useState } from 'react';
import DiffEditor from '@/components/DiffEditor';
import Flex from '@/components/Flex';
import PageTitle from '@/components/PageTitle';

function App() {
  const [originalCode, setOriginalCode] = useState('');
  const [modifiedCode, setModifiedCode] = useState('');
  console.log(originalCode);

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

export default App;