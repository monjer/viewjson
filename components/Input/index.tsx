import React from 'react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  error?: string;
  success?: boolean;
  status?: 'error' | 'success' | 'warning' | 'default';
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  error,
  success,
  status = 'default',
  className = '',
  onChange,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  // Define styles based on status
  const statusStyles = {
    default: 'border-gray-300 focus:border-blue-500 hover:border-blue-500 dark:border-gray-800 dark:focus:border-gray-700 dark:hover:border-gray-700',
    error: 'border-red-500 focus:border-red-500 ',
    success: 'border-green-500 focus:border-green-500 ',
    warning: 'border-yellow-500 focus:border-yellow-500 ',
  };

  return (
    <div className="w-full">
      <input
        className={`
          w-full px-3 py-2
          border rounded
          bg-white dark:bg-gray-950
          outline-hidden
          focus:outline-none 
          disabled:bg-gray-100 disabled:cursor-not-allowed
          placeholder:text-gray-400
          ${statusStyles[error ? 'error' : success ? 'success' : status]}
          ${className}
        `}
        onChange={handleChange}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;