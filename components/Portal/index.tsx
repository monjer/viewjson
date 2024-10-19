import { createPortal } from 'react-dom';

const Portal = ({ children }: { children: React.ReactElement }) => {
  if (typeof window == 'undefined') return null;
  return createPortal(children, document.body);
};

export default Portal;