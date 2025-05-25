import React from 'react';

interface TextAreaProps {
  error?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
  maxLength?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  error,
  className = '',
  onChange,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <textarea
        className={`
          w-full h-full  p-3
          rounded-md border border-gray-300
          focus:border-blue-500 outline-none
          disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
          resize-y
          ${error ? 'border-red-500' : ''}          
        `}
        onChange={handleChange}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;