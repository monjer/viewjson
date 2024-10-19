import React from "react";
import Card from '@/components/Card'
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

  const handleChange = (e: any) => {
    setJson(e.target.value);
    onChange(JSON.stringify(JSON.parse(JSON.parse(e.target.value))));
  }

  return (
    <Card className="h-full w-full overflow-hidden">
      <TextArea
        placeholder="please input the json string"
        value={json} onChange={handleChange}></TextArea>
    </Card>
  );
}
export default ToJSONStringView;