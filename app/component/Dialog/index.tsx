import React from 'react';
import Button from '@/component/Button'

const Dialog = (props: {
  open?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  title?: string;
  children?: React.ReactNode;
  cancelProps?: React.ComponentProps<typeof Button>;
  okProps?: React.ComponentProps<typeof Button>;
  onClose?: React.ComponentProps<typeof Button>;
}) => {
  const { open = true, onOk = null, onCancel = null, title, children, cancelProps = {}, okProps = {}, onClose } = props;
  if (!open) return null;

  return (
    <div className="transition-all ease-in-out fixed inset-0 flex items-center justify-center z-50">
      <div className="transition-all duration-300	ease-in-out fixed inset-0 bg-black opacity-70 dark:bg-opacity-70" onClick={onClose}></div>
      <div className="bg-white border rounded-lg shadow-lg z-10 p-6 w-1/3 dark:bg-black dark:text-white dark:border-gray-600">
        <div className="flex justify-between mb-8">
          <h1 className="text-lg font-bold ">{title}</h1>
          <span onClick={onClose} className='cursor-pointer	'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </span>
        </div>
        <div className="mb-4">{children}</div>
        <footer className="flex justify-end mt-8">
          {onOk && <Button onClick={onOk} {...okProps}>OK</Button>}
          {onCancel && <Button onClick={onCancel} type="secondary" {...cancelProps}>Cancel</Button>}
        </footer>
      </div>
    </div>
  );
};

export default Dialog;