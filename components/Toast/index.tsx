
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';


type ToastType = 'success' | 'error' | 'warning' | 'info';
const mountNodeId = 'app-toast';

interface Props {
  message: string;
  duration?: number;
  onClose?: () => void;
  closable?: boolean;
  visible?: boolean;
  type?: ToastType
}
const Toast = (props: Props) => {
  const { message, onClose, type = "info", visible = false, closable = true } = props;
  const [destroy, setDestroy] = useState(true);
  const toastRef: React.RefObject<HTMLDivElement> = React.useRef(null);
  const timerRef = React.useRef<any>();

  React.useEffect(() => {
    const handler = () => {
      if (!visible) {
        setDestroy(true);
      }
    };
    toastRef?.current?.addEventListener('animationend', handler);
    if (visible) {
      setDestroy(false);
      timerRef.current = setTimeout(() => {
        onCloseBtnClick();
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

  const icon = {
    success: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-5"><path fill="#009431" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>,
    error: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-5"><path fill="#df1616" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>,
    warning: <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 512 512"><path fill="#FFD43B" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>,
    info: <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 512 512"><path fill="#1091f4" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>,
  }[type];
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2	p-4 border border-gray-100 bg-white shadow-md rounded max-w-sm toast-slide-in" ref={toastRef}>
      <div className="flex items-center justify-between" >
        <div className='flex items-center'>
          <span className="mr-2">
            {icon}
          </span>
          <p className="text-gray-800">{message}</p>
        </div>
        {closable &&
          <button
            className="text-gray-500 hover:text-gray-700 ml-4"
            onClick={() => onCloseBtnClick()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        }
      </div>
    </div>
  );
};

const ToastProxy = ({ message, type }: { message: string, type: ToastType }) => {
  const [visible, setVisible] = React.useState(true);
  return <Toast message={message} type={type} visible={visible} onClose={() => setVisible(false)} />;
};
const createToast = (type: ToastType) => {
  return (message: string) => {
    let rootNode = document.getElementById(mountNodeId);
    if (!rootNode) {
      rootNode = document.createElement('div');
      rootNode.id = mountNodeId;
      document.body.appendChild(rootNode);
    }
    createRoot(rootNode).render(<ToastProxy message={message} type={type} />);
  };
};
Toast.success = createToast('success');
Toast.error = createToast('error');
Toast.info = createToast('info');
Toast.warning = createToast('warning');

export default Toast;