import DocSidebar from "@/slots/DocSidebar"
import Flex from "@/components/Flex"
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex className="app-doc-content container mx-auto ">
      <aside className="app-doc-aside sticky border-r px-4 py-10 shrink-0 grow-0 w-[18rem] dark:border-r-gray-700" style={{ height: 'calc(100vh - 60px)' }}>
        <DocSidebar />
      </aside>
      {children}
    </Flex>
  )
}