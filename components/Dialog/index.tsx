'use client';
import React from 'react';
import Button from '@/components/Button';
import Portal from '@/components/Portal';
import './index.scss';

const Dialog = (props: {
  open?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  title?: string;
  children?: React.ReactNode;
  cancelProps?: React.ComponentProps<typeof Button>;
  okProps?: React.ComponentProps<typeof Button>;
  onClose?: () => void;
}) => {
  const { open = true, onOk = null, onCancel = null, title, children, cancelProps = {}, okProps = {}, onClose } = props;
  const [destroyed, setDestroyed] = React.useState(true);
  const backdropRef: React.RefObject<HTMLDivElement> = React.useRef(null);
  const modalRef: React.RefObject<HTMLDivElement> = React.useRef(null);

  React.useEffect(() => {
    const handler = () => {
      if (!open) {
        setDestroyed(true);
      }
    };
    backdropRef?.current?.addEventListener('animationend', handler);
    if (open) {
      setDestroyed(false);
    } else {
      backdropRef?.current?.classList.add('fade-out');
      modalRef?.current?.classList.add('slide-out');
    }
    return () => {
      backdropRef?.current?.removeEventListener('animationend', handler);
    };
  }, [open]);

  if (destroyed) return null;

  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* background layer */}
        <div className="fade-in fixed h-full w-full inset-0 backdrop-blur-sm  bg-black/20 dark:bg-opacity-70" onClick={onClose} ref={backdropRef} ></div>
        <div className="bg-white border rounded-lg shadow-lg z-10 p-6 w-1/3 dark:bg-gray-900 dark:text-white dark:border-gray-600 dark:shadow-gray-100/10	slide-in" ref={modalRef}>
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
    </Portal>
  );

};

export default Dialog;