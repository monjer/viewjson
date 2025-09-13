import React from 'react';
import Content from './content';
import { connection } from 'next/server';

export default async function Page() {
  await connection();
  return (
    <Content />
  );
}