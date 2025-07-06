import React from "react";
import TextArea from "@/components/TextArea";

function ToJSONStringView({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  const [json, setJson] = React.useState('');

  React.useEffect(() => {
    try {
      const obj = JSON.parse(value);
      setJson(JSON.stringify(JSON.stringify(obj)));
    } catch (error) {
      setJson(value);
    }
  }, [value]);

  const handleChange = (value: string) => {
    setJson(value);
    onChange(JSON.stringify(JSON.parse(JSON.parse(value))));
  };

  return (
    <TextArea
      placeholder="Please input a json string or drag and drop a json file here to start"
      value={json} onChange={handleChange}></TextArea>
  );
}
export default ToJSONStringView;