'use server'

import React from "react";
import { redirect } from 'next/navigation'

export default async function Page(id: string) {
  redirect(`/docs/get-started/what-is-json`) // Navigate to the new post page
}