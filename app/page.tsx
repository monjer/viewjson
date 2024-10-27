'use client'
import React from "react"
import { useRouter } from 'next/navigation'

export default function Page(id: string) {
  const router = useRouter()

  React.useEffect(() => {
    router.push('/format')
  }, [])
  return <div className="text-center text-2xl p-20">Loading</div>
}