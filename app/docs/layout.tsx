import DocSidebar from "@/slots/DocSidebar"
import Flex from "@/components/Flex"
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex className="h-full w-full">
      <DocSidebar />
      <article className="prose max-w-none shrink overflow-y-auto py-10 px-20 flex-grow">
        {children}
      </article>
    </Flex>
  )
}