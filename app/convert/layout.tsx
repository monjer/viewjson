'use client'
import React from "react";
import ResponseContainer from "@/slots/ResponseContainer";

export default function Layout(props) {
  return (
    <ResponseContainer className="h-[calc(100vh-60px)] overflow-hidden">
      {props.children}
    </ResponseContainer>
  );
}