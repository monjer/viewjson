"use client";
import React from "react";
import Card from '@/components/Card';
import CmEditor from "@/components/CmEditor";
import { json } from '@codemirror/lang-json';

function HighlightView({ value }: { value: string }) {

  return (
    <>
      <Card className="app-highlight-json-block h-full w-full overflow-auto" >
        <CmEditor code={value} extensions={[json()]} />
      </Card>
    </>
  );
}
export default HighlightView;