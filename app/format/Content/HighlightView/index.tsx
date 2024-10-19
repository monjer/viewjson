"use client"
import React from "react";
import Card from '@/components/Card'
import CmEditor from "@/components/CmEditor";

function HighlightView({ value }: { value: string }) {

  return (
    <>
      <Card className="app-highlight-json-block h-full w-full overflow-auto" >
        <CmEditor code={value} />
      </Card>
    </>
  );
}
export default HighlightView;