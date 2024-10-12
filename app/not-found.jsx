import React from 'react';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="text-8xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Not Found</h2>
        <p className="text-gray-500 mt-2">Could not find requested resource</p>        
        <Link className='mt-6 inline-block px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded' href="/">Return Home</Link>      
    </div>    
    </div>
  )
}