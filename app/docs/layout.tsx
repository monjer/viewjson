import DocSidebar from "@/slots/DocSidebar"
import Flex from "@/components/Flex"
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex className="h-full w-full">
      <aside className="app-doc-aside fixed top-[80px] bottom-0 border-r px-8 py-10 shrink-0 w-[18rem] dark:border-r-gray-700">
        <DocSidebar />
      </aside>
      <article className="app-doc-content xl:px-[22rem] px-[2rem] shrink overflow-y-auto py-10 flex-grow">
        {children}
      </article>
    </Flex>
  )
}