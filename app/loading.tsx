import React from 'react';
import Spinner from '@/components/Spinner';

export default function Loading() {

  return (
    <div className='text-center p-10'>
      <Spinner variant="dots" />
    </div>
  );
}