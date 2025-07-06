import React from "react";
import Format from "./format/page";
import ResponseContainer from "@/slots/ResponseContainer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};


export default function Page() {
  return <ResponseContainer className="app-format-content  overflow-hidden"><Format /></ResponseContainer>;
}