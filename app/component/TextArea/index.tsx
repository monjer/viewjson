import React from 'react'
import './index.scss';

export default (props) => {
  return (
    <textarea {...props} className={`app-textarea w-full h-full py-2 px-3 ${props.className || ''}`} />
  )
}