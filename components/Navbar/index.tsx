import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Dropdown from '../Dropdown';

interface DropdownItem {
  label: string;
  href: string;
  items?: DropdownItem[]
}
interface NavbarProps {
  activeItem?: DropdownItem;
  items?: DropdownItem[];
  onSelect?: (item: DropdownItem) => void;
}

const Navbar = (props: NavbarProps) => {
  const { items = [], onSelect } = props;
  const [, setActiveItem] = useState(null);
  const pathname = usePathname();

  const handleItemClick = (item) => {
    if ('activeItem' in props) {
      if (onSelect) {
        onSelect(item);
      }
    } else {
      setActiveItem(item);
    }
  };

  return (
    <nav >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex space-x-4">
            {
              items.map((item) => {
                const active = pathname.indexOf(item.href) === 0;
                let className = "cursor-pointer hover:text-gray-900 dark:hover:text-white";
                if (active) {
                  className += " text-gray-900 dark:text-white";
                }
                if (item.items?.length > 0) {
                  return (
                    <Dropdown items={item.items} onSelect={handleItemClick} className={"mr-5 "}>
                      <a className={` ${className}`} key={item.href} >
                        {item.label}
                      </a>
                    </Dropdown>
                  );
                }
                return (
                  <Link className={`mr-5  ${className}`} href={item.href} key={item.href} >
                    {item.label}
                  </Link>
                );
              })
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;