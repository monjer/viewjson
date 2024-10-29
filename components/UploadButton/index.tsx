import React from 'react';
import Button from '../Button';

const UploadButton = (props) => {

  const handleFileChange = (e) => {
    props?.onChange(e.target.files[0]);
  };

  return (
    <Button>
      <label
        htmlFor="file-upload"
        className='cursor-pointer'
      >
        {props.children}
      </label>
      <input
        type="file"
        id="file-upload"
        onChange={handleFileChange}
        className="hidden"
      />
    </Button>
  );
};

export default UploadButton;