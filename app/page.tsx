// 'use client'
// import React from "react"
// import { useRouter } from 'next/navigation'

// export default function Page() {
//   const router = useRouter()
//   React.useEffect(() => {
//     router.push('/format')
//   }, [])
//   return <div className="text-center text-2xl p-20">Loading</div>
// }
import React from "react";
import Format from "./format/page";
import ResponseContainer from "@/slots/ResponseContainer";

export default function Page() {
  return <ResponseContainer className="app-format-content h-[calc(100vh-80px)] overflow-hidden"><Format /></ResponseContainer>
}