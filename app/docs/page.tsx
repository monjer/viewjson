'use server'

import React from "react";
import { redirect } from 'next/navigation'

export default async function Page(id: string) {
  redirect(`/docs/what-is-json`) // Navigate to the new post page
}