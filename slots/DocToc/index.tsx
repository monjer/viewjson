'use client';
import React from "react";
import Link from 'next/link';
import "./index.scss";

function DocToc(props) {
  const { dataSource = [], className = "" } = props;
  const [activeTocItemElId, setActiveTocItemElId] = React.useState('');

  React.useEffect(() => {
    const hanldIntersect = (entries) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveTocItemElId(visibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(hanldIntersect, {
      root: null,
      rootMargin: "-10% 0px -10% 0px",
      threshold: 0,
    });

    const tocItemEls = dataSource.map((item) => {
      return document.getElementById(item.href.slice(1));
    }).filter((item) => item);
    tocItemEls?.forEach((el) => {
      observer.observe(el);
    });
    return () => {
      tocItemEls.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [dataSource]);
  return (
    <aside className={`app-doc-toc sticky text-sm	 top-[80px] right-0 w-[18rem] max-h-[calc(80vh)] overflow-y-auto  px-4 xl:block ${className}`}>
      <h2 className="font-medium text-lg px-2 mb-2">On this page</h2>
      <div className="py-4 overflow-hidden">
        {
          dataSource.map((item, index) => {
            const active = activeTocItemElId === item.href.slice(1);
            const activeClass = active ? 'font-semibold active text-black border-l-gray-900 dark:text-gray-100 dark:border-l-gray-400' : ' border-l-stone-300 dark:border-l-gray-700 ';
            return (
              <div key={index}
                className={`doc-toc-item pl-3 py-2 border-l ${activeClass}`} data-toc-level={item.level}>
                <Link href={item.href} title={item.title}>{item.title}</Link>
              </div>
            );
          })
        }
      </div>
    </aside>
  );
}

export default DocToc;