import React, { useState } from 'react';
import Link from 'next/link';
import Dropdown from '../Dropdown';

interface DropdownItem {
  label: string;
  key?: string;
  items?: DropdownItem[]
}
interface NavbarProps {
  activeItem?: DropdownItem;
  items?: DropdownItem[];
  onSelect?: (item: DropdownItem) => void;
  activeKeys?: string[];
}

const Navbar = (props: NavbarProps) => {
  const { items = [], onSelect } = props;
  const [activeKeys, setActiveKeys] = useState(props.activeKeys || []);

  const handleItemClick = (item) => {
    if ('onSelect' in props) {
      onSelect(item);
    } else {
      setActiveKeys([item.key]);
    }
  };

  React.useEffect(() => {
    setActiveKeys(props.activeKeys || []);
  }, [props.activeKeys]);

  return (
    <nav >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-1 space-x-6 flex items-center justify-center sm:items-stretch sm:justify-start">
          {
            items.map((item) => {
              let className = "cursor-pointer hover:text-gray-900 dark:hover:text-white";
              if (activeKeys.includes(item.key)) {
                className += " font-semibold text-black dark:text-white dark:hover:text-white";
              }
              if (item.items?.length > 0) {
                return (
                  <Dropdown items={item.items} onSelect={handleItemClick} key={item.key}>
                    <a className={`${className}`} key={item.key} >
                      {item.label}
                    </a>
                  </Dropdown>
                );
              }
              return (
                <Link className={`mr-5 ${className}`} href={item.key} key={item.key} >
                  {item.label}
                </Link>
              );
            })
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;