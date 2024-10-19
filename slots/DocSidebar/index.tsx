import React from "react";
import docRoutes from '@/config/docSidebar';
import './index.scss';

type NavItemProps = {
  title: string;
  href: string;
  items: NavItemProps[]
}

function NavItem({ item }: { item: NavItemProps }) {
  return (
    <li>
      <a href={item.href}>{item.title}</a>
      {item.items?.length > 0 && <Nav items={item.items} />}
    </li>
  )
}
function SubNav({ item }: { item: NavItemProps }) {
  const { items = [], title } = item;
  return (
    <div>
      <h2>{title}</h2>
      {items.map((item) => <NavItem item={item} key={item.href} />)}
    </div>
  )
}

function Nav({ items = [] }: { items: NavItemProps[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => <SubNav item={item} key={item.href} />)}
    </ul>
  )
}

function DocSidebar() {
  return (
    <aside className="app-doc-aside fixed top-60 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <Nav items={docRoutes as NavItemProps[]} />
    </aside>
  )
}

export default DocSidebar;