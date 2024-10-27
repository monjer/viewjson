'use server'


import { redirect } from 'next/navigation'

export default async function Page(id: string) {
  redirect(`/format`)
}