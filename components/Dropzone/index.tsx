import React from 'react';
import Dropzone from 'react-dropzone';

export default (props) => {

  return (
    <Dropzone onDrop={acceptedFiles => props.onChange(acceptedFiles)} noClick>
      {({ getRootProps, getInputProps, isDragAccept = true }) => {
        return (
          <>
            <div {...getRootProps({})} className='h-full relative'>
              {isDragAccept
                && (
                  <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-700	 z-40'>
                    <div className='text-center'>
                      <div className='text-2xl'>
                        <i className='fas fa-cloud-upload-alt'></i>
                      </div>
                      <div className='text-2xl dark:text-white'>
                        {'Drag and drop file here'}
                      </div>
                    </div>
                  </div>
                )
              }
              <input {...getInputProps()} />
              {props.children}
            </div>
          </>
        );
      }}
    </Dropzone>
  );
};
