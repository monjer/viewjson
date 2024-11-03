import React from 'react';
import Button from '../Button';

interface Props {
  onChange: (file: File) => void,
  children: React.ReactNode
}
function generateRandomId(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}

const UploadButton = (props: Props) => {
  const labelRef: React.RefObject<HTMLLabelElement> = React.useRef();
  const inputRef: React.RefObject<HTMLInputElement> = React.useRef();

  React.useEffect(() => {
    const uploadId = `file-upload-${generateRandomId(12)}`;
    if (labelRef.current && inputRef.current) {
      labelRef.current.setAttribute('for', uploadId);
      inputRef.current.setAttribute('id', uploadId);
    }
  }, []);

  const handleFileChange = (e) => {
    props?.onChange(e.target.files[0]);
  };

  return (
    <Button>
      <label
        ref={labelRef}
        className='cursor-pointer'
      >
        {props.children}
      </label>
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </Button>
  );
};

export default UploadButton;