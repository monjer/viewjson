import React from "react";
import Card from '@/component/Card'
import TextArea from "@/component/TextArea";

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