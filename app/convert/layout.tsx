'use client'
import React from "react";
import Flex from "@/components/Flex";
import CmEditor from "@/components/CmEditor";
import Card from "@/components/Card";
import ResponseContainer from "@/slots/ResponseContainer";
import Button from "@/components/Button";

export default function Layout(props) {
  return (
    <ResponseContainer className="h-[calc(100vh-80px)] overflow-hidden mt-5">
      {props.children}
    </ResponseContainer>
  );
}