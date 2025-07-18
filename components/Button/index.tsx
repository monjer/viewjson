import React from "react";

interface ButtonProps {
  className?: string;
  type?: 'primary' | 'danger' | 'ghost' | 'text' | 'secondary';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
  [key: string]: unknown;
  icon: boolean
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const { className, type = "primary", children, disabled, loading, style = {}, icon = false, ...rest } = props;
  const baseStyles = `inline-flex items-center justify-center whitespace-nowrap rounded cursor-pointer 
  text-xs transition-all ease-in-outrounded 
  px-2 py-1 shrink-0 grow-0`;
  const loadingStyles = loading || disabled ? 'bg-gray-300 cursor-not-allowed disabled:opacity-50' : '';
  const typeStyles = {
    primary: `    
    bg-neutral-700 text-neutral-100 enabled:hover:bg-neutral-900 enabled:hover:text-white
    dark:bg-neutral-800 dark:text-white enabled:dark:hover:bg-neutral-700 enabled:dark:hover:text-white
    border boder-neutral-800 dark:border-neutral-700`,
    danger: 'bg-red-500 text-white hover:bg-red-700',
    ghost: 'bg-transparent text-slate-500 border-none  enabled:hover:bg-slate-500 enabled:hover:text-white',
    text: 'bg-transparent text-blue-500 hover:underline dark:text-white border-none',
    secondary: `border 
    bg-gray-200 text-gray-800 enabled:hover:bg-gray-700 enabled:hover:text-white 
    dark:bg-gray-700 dark:text-white enabled:dark:hover:bg-gray-500 enabled:dark:hover:text-white`,
    outline: `border border-gray-300 text-gray-800 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white ${icon ? '!px-1' : 'px-2'}`,
  }[type];
  return (
    <button
      disabled={disabled || loading}
      className={`${baseStyles} ${loadingStyles} ${typeStyles} ${className || ''}`} style={style} {...rest} ref={ref}>
      {loading ? <span className="flex items-center ">
        <span className="scale-75">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="animate-spin h-5 w-5 mr-3 dark:text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </span>
        {children}
      </span> : children}
    </button>
  );
};
export default React.forwardRef(Button);