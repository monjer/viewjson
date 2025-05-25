import React from "react";
import TextArea from "@/components/TextArea";

function PlainView({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  return (
    <TextArea
      placeholder="Input the json string or drag and drop a json file here to start"
      value={value}
      className="app-textarea h-full "
      onChange={onChange}></TextArea>
  );
}
export default PlainView;