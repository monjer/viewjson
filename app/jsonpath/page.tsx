'use client';
import React from "react";
import CodeEditorPanel from "@/components/CodeEditorPanel";
import { lintGutter } from "@/utils/lint";
import PageTitle from "@/components/PageTitle";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Flex from "@/components/Flex";
import TextArea from "@/components/TextArea";
import { JSONPathJS } from "jsonpath-js";
import { JSONPath } from 'jsonpath-plus';

const JSONPathTypes = {
  RFC: 'rfc',
  JSONPathPlus: 'jsonpath-plus',
};

const options = [
  { label: 'RFC 9535', value: JSONPathTypes.RFC },
  { label: 'JSONPath Plus', value: JSONPathTypes.JSONPathPlus },
];

const defaultJSONString = `{
  "store": {
    "book": [
      {
        "category": "reference",
        "author": "Nigel Rees",
        "title": "Sayings of the Century",
        "price": 8.95
      },
      {
        "category": "fiction",
        "author": "Evelyn Waugh",
        "title": "Sword of Honour",
        "price": 12.99
      },
      {
        "category": "fiction",
        "author": "Herman Melville",
        "title": "Moby Dick",
        "isbn": "0-553-21311-3",
        "price": 8.99
      },
      {
        "category": "fiction",
        "author": "J. R. R. Tolkien",
        "title": "The Lord of the Rings",
        "isbn": "0-395-19395-8",
        "price": 22.99
      }
    ],
    "bicycle": {
      "color": "red",
      "price": 19.95
    }
  }
}
`;

export default function Page() {
  const [jsonContent, setJsonContent] = React.useState(defaultJSONString);
  const [jsonPathResult, setJsonPathResult] = React.useState<string>('');
  const [jsonPathError, setJsonPathError] = React.useState<string>('');
  const [jsonPathType, setJsonPathType] = React.useState<string>(options[0].value);
  const [jsonPathQuery, setJsonPathQuery] = React.useState<string>('');

  function validateJSON() {
    return true;
  }

  function onChange(value) {
    console.log('onChange', value);
    setJsonContent(value);
  }

  React.useEffect(() => {
    if (jsonPathQuery.trim() === '') {
      setJsonPathResult('');
      setJsonPathError('');
      return;
    }
    try {
      let result;
      if (jsonPathType === JSONPathTypes.RFC) {
        const query = new JSONPathJS(jsonPathQuery);
        result = query.find(JSON.parse(jsonContent));
      } else if (jsonPathType === 'jsonpath-plus') {
        result = JSONPath({ path: jsonPathQuery, json: JSON.parse(jsonContent) });
      }
      setJsonPathResult(JSON.stringify(result, null, 2));
      setJsonPathError('');
    } catch (error) {
      setJsonPathError(`Error evaluating JSONPath: ${error.message}`);
      setJsonPathResult('');
      return;
    }
  }, [jsonContent, jsonPathQuery, jsonPathType]);



  return (
    <div  >
      <PageTitle title="JSONPath Evaluator" />
      <Flex className="mb-4">
        <Select
          options={options}
          value={jsonPathType}
          onChange={(value: string) => setJsonPathType(value)}
          placeholder="Select an option"
          width="200px"
        />
        <div className="grow ">
          <Input placeholder="Input JSONPath query" value={jsonPathQuery} onChange={setJsonPathQuery} />
          <div className="text-red-500 mt-2">
            {jsonPathError}
          </div>
        </div>
      </Flex>
      <Flex justify="stretch" style={{ height: '600px' }}>
        <div className="grow-1 shrink-0 flex-none  h-full" style={{ width: '50%' }}>
          <h2 className="mb-2 text-lg font-bold">JSON Document</h2>
          <CodeEditorPanel
            hideTopbar
            value={jsonContent}
            filename="data.json"
            mime="application/json"
            onChange={onChange}
            placeholder="Please input a json string or drag and drop a json file here to start"
            validateValue={validateJSON}
            extensions={[lintGutter()]}
            showExpandButton={false}
            language="json" />
        </div>
        <div className="grow-1 shrink-0 h-full" style={{ width: '50%' }} >
          <h2 className="mb-2 text-lg font-bold">Evaluation Results</h2>
          <TextArea value={jsonPathResult} className="h-full"></TextArea>
        </div>
      </Flex>
    </div >
  );
}