'use server';

import { redirect } from 'next/navigation';

export default async function Page() {
  redirect(`/docs/what-is-json`);
}