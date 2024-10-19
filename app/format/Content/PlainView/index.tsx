import React from "react";
import Card from '@/components/Card'
import TextArea from "@/components/TextArea";

function PlainView({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  return (
    <Card className="h-full w-full overflow-hidden">
      <TextArea
        placeholder="please input the json string"
        value={value} onChange={onChange}></TextArea>
    </Card>
  );
}
export default PlainView;