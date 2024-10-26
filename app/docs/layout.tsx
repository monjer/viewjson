import DocSidebar from "@/slots/DocSidebar"
import Flex from "@/components/Flex"
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex className="container mx-auto" >
      <aside className="app-doc-aside fixed top-[80px] bottom-0 border-r px-4 py-10 shrink-0 w-[18rem] dark:border-r-gray-700">
        <DocSidebar />
      </aside>
      <article className="app-doc-content py-10 ml-[18rem]">
        {children}
      </article>
    </Flex>
  )
}