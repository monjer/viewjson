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
  console.log('pathname   ', pathname)
  const active = pathname.indexOf(item.href) > -1;

  return (
    <li className="pl-6 flex flex-col gap-y-2">
      <Link href={item.href} className={active ? 'text-black' : ''} title={item.title}>{item.title}</Link>
      {item.items?.length > 0 && <Nav items={item.items} />}
    </li>
  )
}
function SubNav({ item }: { item: NavItemProps }) {
  const { items = [], title } = item;
  return (
    <>
      <h1 className="text-xl font-bold">{title}</h1>
      <ul className="border-l flex flex-col gap-y-2 py-1">
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
    <aside className="app-doc-aside border-r px-8 py-10 shrink w-3/12	 max-w-[250px] transition-transform -translate-x-full sm:translate-x-0">
      <Nav items={docRoutes as NavItemProps[]} />
    </aside>
  )
}

export default DocSidebar;