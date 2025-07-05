'use client';
import React from "react";
import Flex from "@/components/Flex";
import Button from "@/components/Button";
import CodeEditorPanel from "@/components/CodeEditorPanel";
import Toast from "@/components/Toast";
import Papa from 'papaparse';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Tooltip from "@/components/Tooltip";
import PageTitle from "@/components/PageTitle";

export default function Layout() {
  const [csvContent, setCsvContent] = React.useState('');
  const [jsonContent, setJsonContent] = React.useState('');

  const onJSONToCsv = () => {
    if (!validateJSON(jsonContent)) {
      Toast.error('Please input JSON string');
      return;
    }
    const obj = JSON.parse(jsonContent);
    if (!Array.isArray(obj)) {
      Toast.error('The JSON string should be an array.');
    }

    const jsonStr = Papa.unparse(obj);
    setCsvContent(jsonStr);
  };

  const onCsvToJson = async () => {
    const result = await new Promise((resolve) => {
      Papa.parse(csvContent, { worker: true, header: true, dynamicTyping: true, complete: resolve });
    }) as { errors: unknown[], data: object };
    if (result.errors.length > 0) {
      Toast.error('Convert error');
    } else {
      setJsonContent(JSON.stringify(result.data, null, 2));
    }

  };

  function validateJSON(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  function validateCSV() {
    return true;
  }
  return (
    <Flex className="h-full w-full" direction="col">
      <PageTitle title="Convert JSON To CSV" />
      <Flex className="mb-5 overflow-hidden grow  w-full">
        <CodeEditorPanel
          value={jsonContent}
          filename="data.json"
          mime="application/json"
          onChange={setJsonContent}
          validateValue={validateJSON}
          language="json"
          placeholder="Input a json string"
          editorContainerStyle={{ height: 'calc(80vh - 160px)' }}
        />
        <Flex className="gap-2 mx-2 mt-20" direction="col" justify="start">
          <Tooltip text="json to csv">
            <Button onClick={onJSONToCsv} style={{ width: '30px', height: '30px' }}><ChevronRight size={20} /></Button>
          </Tooltip>
          <Tooltip text="csv to json ">
            <Button onClick={onCsvToJson} style={{ width: '30px', height: '30px' }}><ChevronLeft size={20} /></Button>
          </Tooltip>
        </Flex>
        <CodeEditorPanel
          value={csvContent}
          filename="data.csv"
          mime="text/csv"
          editorContainerStyle={{ height: 'calc(80vh - 160px)' }}
          onChange={(v) => {
            console.log(v);
            setCsvContent(v);
          }}
          validateValue={validateCSV}
          language="csv" />
      </Flex>
    </Flex>
  );
}