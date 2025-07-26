import { ComponentProps } from "react";
import './index.scss';
type SheetBlockProps = ComponentProps<"pre"> & {
  raw?: string;
  title?: string;
  rowSpan?: number;
  className?: string;
};

export default function SheetBlock({
  children,
  title,
  rowSpan = 1,
  className = '',
}: SheetBlockProps) {
  const rowSpanClass = {
    1: 'row-span-1',
    2: 'row-span-2',
    3: 'row-span-3',
  }[rowSpan] || 'row-span-1';
  return (
    <div className={`sheetblock 
    flex flex-col 
    shadow-md
    dark:shadow-gray-800/50
    bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded relative ${`${rowSpanClass}`} ${className}`}>
      <h3 className={
        `
        !text-sm font-normal mb-0 py-1 px-2 !mt-0 title absolute top-0 right-0 z-1 text-white bg-blue-500 dark:bg-gray-600  rounded 
        text-center
        `
      }>
        {title}
      </h3>
      <div className="px-4 pt-8 pb-4 grow-1">
        <div>{children}</div>
      </div>
    </div>
  );
}
