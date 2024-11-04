import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { outsideClick } from '@/utils';

interface DropdownProps {
  defaultOpen?: boolean
  open?: boolean
  items?: { label: string; href?: string }[];
  onSelect?: (item: { label: string; href: string }) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onOpenChange?: (visible: boolean) => void
}
const Dropdown = (props: DropdownProps) => {
  const { items = [], onSelect, children, className, style = {}, open = false, onOpenChange } = props;
  const triggerRef = React.useRef(null);
  const popoverRef = React.useRef(null);
  const [isOpen, setIsOpen] = useState(open || false);

  const toggleDropdown = () => {
    if ('visible' in props) {
      onOpenChange?.(!isOpen);
    } else {
      setIsOpen(!isOpen);
    }
  };


  const handleItemClick = (item) => {
    if (onSelect) {
      onSelect(item);
    }
    setIsOpen(false);
  };

  React.useEffect(() => {
    let destory = null;
    if (isOpen) {
      destory = outsideClick([popoverRef.current, triggerRef.current], () => {
        toggleDropdown();
      });
    }
    return () => {
      destory?.();
    };
  }, [isOpen]);



  return (
    <div className={`relative ${className}`} style={style}>
      <span className='flex items-center select-none' onClick={toggleDropdown} ref={triggerRef}>
        {children}
        <ChevronDown size={12} />
      </span>
      {isOpen && (
        <nav ref={popoverRef} className="absolute left-0 w-56 mt-2  bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900">
          <ul className='py-2'>
            {items.map((item, index) => (
              <li
                key={`${item.href}-${index}`}
                className="px-4 py-4 text-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => handleItemClick(item)}
              >
                <Link className="flex items-center" href={item.href} >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Dropdown;

