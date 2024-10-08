import React from "react";

function Button(props) {
  const { className, type = "primary", children, ...rest } = props;
  const baseStyles = 'rounded text-sm transition-all ease-in-outrounded py-1 px-3';
  const typeStyles = {
    primary: 'bg-slate-200 text-black hover:bg-slate-700 hover:text-white dark:bg-blue-500 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white',
    danger: 'bg-red-500 text-white hover:bg-red-700',
    ghost: 'bg-transparent text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white',
    text: 'bg-transparent text-slate-500 hover:underline dark:text-white',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-700 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white',
  }[type];
  return <button className={`${baseStyles} ${typeStyles} ${className || ''}`} {...rest}>{children}</button>;
}
export default Button;