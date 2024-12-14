'use client';
import React from "react";
import docRoutes from '@/config/docSidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './index.scss';

interface NavItemProps {
  title: string;
  href: string;
  items: NavItemProps[]
}

interface ItemLink {
  title: string;
  href: string;
  className?: string;
  style?: React.CSSProperties
}
function ItemLink({ href, title, className = "", style = {} }: ItemLink) {
  const pathname = usePathname();
  const active = pathname.indexOf(href) > -1;
  return (
    <Link href={href} title={title} className={`hover:text-black dark:hover:text-white ${className} ${active ? 'text-black dark:text-white' : ''}`} style={style}>{title}</Link>
  );
}

function NavItem({ item }: { item: NavItemProps }) {
  const pathname = usePathname();
  const active = pathname.indexOf(item.href) > -1;
  const className = active ? 'text-black border-l-gray-900 dark:text-gray-100 dark:border-l-gray-400' : ' border-l-stone-300 dark:border-l-gray-700';
  return (
    <li className={`pl-6 flex flex-col py-2 border-l ${className}`}>
      <ItemLink href={item.href} title={item.title} />
      {item.items?.length > 0 && <Nav items={item.items} />}
    </li>
  );
}
function SubNav({ item }: { item: NavItemProps }) {
  const { items = [], title, href } = item;
  return (
    <>
      <h1 className="text-base m-0">{href ? <ItemLink href={href} title={title} /> : title}</h1>
      <ul className="flex flex-col">
        {items.map((item) => <NavItem item={item} key={item.href} />)}
      </ul>
    </>
  );
}

function Nav({ items = [] }: { items: NavItemProps[] }) {
  return (
    <div className="flex flex-col gap-y-2 ">
      {items.map((item) => <SubNav item={item} key={item.href} />)}
    </div>
  );
}

function DocSidebar() {
  return (
    <div>
      <Nav items={docRoutes as NavItemProps[]} />
    </div>
  );
}

export default DocSidebar;