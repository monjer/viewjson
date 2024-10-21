import DocSidebar from "@/slots/DocSidebar"
import Flex from "@/components/Flex"
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex className="h-full w-full">
      <DocSidebar />
      <article className="prose max-w-none pr-[20px] xl:pr-[260px] pl-[20px] shrink overflow-y-auto py-10 flex-grow dark:prose-invert">
        {children}
      </article>
    </Flex>
  )
}