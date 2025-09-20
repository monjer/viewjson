'use client';
import React from "react";
import CodeEditorPanel from "@/components/CodeEditorPanel";
import { lintGutter } from "@/utils/lint";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Flex from "@/components/Flex";
import TextArea from "@/components/TextArea";
import { JSONPathJS } from "jsonpath-js";
import { JSONPath } from 'jsonpath-plus';
import { useJsonFromUrl } from "@/hooks/useJSONFromURL";

const JSONPathTypes = {
  RFC: 'rfc',
  JSONPathPlus: 'jsonpath-plus',
};

const options = [
  { label: 'RFC 9535', value: JSONPathTypes.RFC },
  { label: 'JSONPath Plus', value: JSONPathTypes.JSONPathPlus },
];

const defaultJSONString = `{
  "programs": [
    {
      "id": 1,
      "name": "Visual Studio Code",
      "type": "Editor",
      "version": "1.80.0",
      "platforms": ["Windows", "macOS", "Linux"],
      "website": "https://code.visualstudio.com/"
    },
    {
      "id": 2,
      "name": "Google Chrome",
      "type": "Browser",
      "version": "115.0",
      "platforms": ["Windows", "macOS", "Linux", "Android", "iOS"],
      "website": "https://www.google.com/chrome/"
    },
    {
      "id": 3,
      "name": "Node.js",
      "type": "Runtime",
      "version": "20.5.0",
      "platforms": ["Windows", "macOS", "Linux"],
      "website": "https://nodejs.org/"
    }
  ]
}
`;

export default function JSONPathContent() {
  const [jsonContent, setJsonContent] = React.useState(defaultJSONString);
  const [jsonPathResult, setJsonPathResult] = React.useState<string>('');
  const [jsonPathError, setJsonPathError] = React.useState<string>('');
  const [jsonPathType, setJsonPathType] = React.useState<string>(options[0].value);
  const [jsonPathQuery, setJsonPathQuery] = React.useState<string>('');
  const { data } = useJsonFromUrl();

  React.useEffect(() => {
    if (data) {
      setJsonContent(JSON.stringify(data, null, 2));
    }
  }, [data]);

  function validateJSON() {
    return true;
  }

  function onChange(value) {
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
      <Flex justify="stretch">
        <h2 className="mb-2 text-lg font-bold w-[50%]">JSON Document</h2>
        <h2 className="mb-2 text-lg font-bold w-[50%]">Evaluation Results</h2>
      </Flex>
      <Flex justify="stretch" style={{ height: '600px' }}>
        <div className="h-full" style={{ width: '50%' }}>
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
          <TextArea value={jsonPathResult} className="h-full"></TextArea>
        </div>
      </Flex>
    </div >
  );
}