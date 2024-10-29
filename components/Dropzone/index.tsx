import React from 'react'
import Dropzone from 'react-dropzone'


export default (props) => {
  return (
    <Dropzone onDrop={acceptedFiles => props.onChange(acceptedFiles)} noClick>
      {({ getRootProps, getInputProps }) => (
        <>
          <div {...getRootProps()} className='h-full'>
            <input {...getInputProps()} />
            {props.children}
          </div>
        </>
      )}
    </Dropzone>
  );
}
