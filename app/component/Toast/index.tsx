
import React, { useState } from 'react';
import './index.scss';

type Props = {
  message: string;
  duration?: number;
  onClose?: () => void;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
}
const Toast = (props: Props) => {
  const { message, onClose, onVisibleChange, visible = false } = props
  const [destroy, setDestroy] = useState(true);
  const toastRef: React.RefObject<HTMLDivElement> = React.useRef(null);
  const timerRef = React.useRef<any>();

  React.useEffect(() => {
    const handler = () => {
      if (!visible) {
        setDestroy(true);
      }
    }
    toastRef?.current?.addEventListener('animationend', handler);
    if (visible) {
      setDestroy(false);
      timerRef.current = setTimeout(() => {
        onCloseBtnClick()
      }, 2000);
    } else {
      toastRef?.current?.classList.add('toast-slide-out');
    }
    return () => {
      toastRef?.current?.removeEventListener('animationend', handler);
    };
  }, [visible]);

  const onCloseBtnClick = () => {
    onClose && onClose();
  };

  if (destroy) {
    return null;
  }

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 p-4 bg-white shadow-md rounded max-w-sm toast-slide-in" ref={toastRef}>
      <div className="flex items-center justify-between" >
        <p className="text-gray-800">{message}</p>
        <button
          className="text-gray-500 hover:text-gray-700 ml-4"
          onClick={() => onCloseBtnClick()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;