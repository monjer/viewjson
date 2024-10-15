"use client"
import React from "react";
import Card from '@/component/Card'
import CmEditor from "@/component/CmEditor";

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