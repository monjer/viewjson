import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type DropdownProps = {
  items?: { label: string; href: string }[];
  onSelect?: (item: { label: string; href: string }) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Dropdown = (props: DropdownProps) => {
  const { items = [], onSelect, children, className, style = {} } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    if (onSelect) {
      onSelect(item);
    }
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} style={style}>
      <span className='flex items-center select-none' onClick={toggleDropdown}>
        {children}
        <ChevronDown size={12} />
      </span>
      {isOpen && (
        <nav className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className='py-2'>
            {items.map((item, index) => (
              <li
                key={index}
                className="px-4 py-4 text-md cursor-pointer text-gray-700 hover:bg-gray-100"
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

