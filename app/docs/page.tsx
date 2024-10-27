'use server'

import React from "react";
import { redirect } from 'next/navigation'

export default async function Page(id: string) {
  return (
    <div>
      {redirect(`/docs/what-is-json`)}
    </div>
  )
}