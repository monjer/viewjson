import React from "react";
import Card from '@/components/Card';
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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value);
    onChange(JSON.stringify(JSON.parse(JSON.parse(e.target.value))));
  };

  return (
    <Card className="h-full w-full overflow-hidden">
      <TextArea
        placeholder="Please input the json string or drag and drop a json file here"
        value={json} onChange={handleChange}></TextArea>
    </Card>
  );
}
export default ToJSONStringView;