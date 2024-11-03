// src/components/Input.js
import React from 'react';

interface InputProps {
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}
const Input = (props: InputProps) => {
  const { type = 'text', value, onChange, placeholder, className, ...rest } = props
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };
  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`w-full p-2 border outline-none border-gray-300 rounded-md focus:border-blue-500  ${className}`}
      {...rest}
    />
  );
};

export default Input;