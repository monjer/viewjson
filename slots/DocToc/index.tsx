import React from "react";
import Link from 'next/link';

function DocToc(props) {
  const { dataSource = [] } = props;
  return (
    <aside className="fixed top-[80px] right-0 w-[240px] max-h-[calc(80vh)] hidden overflow-y-auto xl:block">
      <h3 className="font-medium text-sm">On this page</h3>
      {
        dataSource.map((item, index) => {
          return (
            <div key={index} className="doc-toc-item">
              <Link href={item.href}>{item.title}</Link>
            </div>
          )
        })
      }
    </aside>
  );
}

export default DocToc;