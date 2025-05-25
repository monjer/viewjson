'use client';
import React from "react";
import CodeEditorPanel from "@/components/CodeEditorPanel";
import { linter, Diagnostic, lintGutter } from "@/utils/lint";
import PageTitle from "@/components/PageTitle";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Flex from "@/components/Flex";
import Button from "@/components/Button";
import TextArea from "@/components/TextArea";

export default function Page() {
  const [jsonContent, setJsonContent] = React.useState(``);

  function validateJSON() {
    return true;
  }

  function onChange(value) {
    setJsonContent(value);
  }

  const options = [
    { label: 'RFC 9535', value: 'rfc' },
    { label: 'JSONPath Plus', value: 'jsonpath-plus' },
  ];

  const [selectedValue, setSelectedValue] = React.useState<string>(options[0].value);
  const [jsonPathQuery, setJsonPathQuery] = React.useState<string>('');

  return (
    <div  >
      <PageTitle title="JSONPath Evaluator" />
      <Flex className="mb-4">
        <Select
          options={options}
          value={selectedValue}
          onChange={(value: string) => setSelectedValue(value)}
          placeholder="Select an option"
          width="200px"
        />
        <Input placeholder="Input JSONPath query" value={jsonPathQuery} onChange={setJsonPathQuery} />
        <Button>Evaluate</Button>
      </Flex>
      <Flex>
        <div className="grow">
          <h2 className="mb-2 text-lg font-bold">JSON Document</h2>
          <CodeEditorPanel
            hideTopbar
            value={jsonContent}
            filename="data.json"
            mime="application/json"
            onChange={onChange}
            placeholder="Input a json string"
            validateValue={validateJSON}
            extensions={[lintGutter()]}
            showExpandButton={false}
            language="json" />
        </div>
        <Flex className="grow" direction="col">
          <h2 className="mb-2 text-lg font-bold">Evaluation Results</h2>
          <TextArea value={jsonContent} className="flex-shrink h-full"></TextArea>
        </Flex>
      </Flex>
    </div >
  );
}