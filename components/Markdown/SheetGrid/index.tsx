import { ComponentProps } from "react";


export default function SheetGrid({
  children,
}: ComponentProps<'main'>) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm leading-[1.3rem] mb-8">
      <>{children}</>
    </main>
  );
}
