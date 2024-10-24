'use client'
import React from "react";
import docRoutes from '@/config/docSidebar';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import './index.scss';

type NavItemProps = {
  title: string;
  href: string;
  items: NavItemProps[]
}

function NavItem({ item }: { item: NavItemProps }) {
  const pathname = usePathname();
  const active = pathname.indexOf(item.href) > -1;
  const className = active ? 'text-black border-l-gray-900 dark:text-gray-100 dark:border-l-gray-400' : 'dark:border-l-gray-700'
  return (
    <li className={`pl-6 flex flex-col py-2 border-l ${className}`}>
      <Link href={item.href} title={item.title}>{item.title}</Link>
      {item.items?.length > 0 && <Nav items={item.items} />}
    </li>
  )
}
function SubNav({ item }: { item: NavItemProps }) {
  const { items = [], title } = item;
  return (
    <>
      <h1 className="text-xl font-bold">{title}</h1>
      <ul className="flex flex-col">
        {items.map((item) => <NavItem item={item} key={item.href} />)}
      </ul>
    </>
  )
}

function Nav({ items = [] }: { items: NavItemProps[] }) {
  return (
    <div className="flex flex-col gap-y-4 ">
      {items.map((item) => <SubNav item={item} key={item.href} />)}
    </div>
  )
}

function DocSidebar() {
  return (
    <div>
      <Nav items={docRoutes as NavItemProps[]} />
    </div>
  )
}

export default DocSidebar;