'use client';
import React from "react";
import Flex from "@/components/Flex";
import Button from "@/components/Button";
import CodeEditorPanel from "@/components/CodeEditorPanel";
import Toast from "@/components/Toast";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Tooltip from "@/components/Tooltip";
import { Base64 } from "js-base64";
import PageTitle from "@/components/PageTitle";
import { useJsonFromUrl } from "@/hooks/useJSONFromURL";

export default function Layout() {
  const [base64Content, setBase64Content] = React.useState('');
  const [jsonContent, setJsonContent] = React.useState('');
  const { data } = useJsonFromUrl();

  React.useEffect(() => {
    if (data) {
      setJsonContent(JSON.stringify(data, null, 2));
    }
  }, [data]);

  const onJSONToBase64 = () => {
    if (!validateJSON(jsonContent)) {
      Toast.error('Please input JSON string');
      return;
    }
    const base64String = Base64.encode(JSON.stringify(JSON.parse(jsonContent)));
    setBase64Content(base64String);
  };

  const onBase64ToJson = async () => {
    const base64String = Base64.decode(base64Content);
    setJsonContent(JSON.stringify(JSON.parse(base64String), null, 2));
  };

  function validateJSON(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  function validateBase64() {
    return true;
  }

  return (
    <>
      <Flex className="h-full w-full" direction="col">
        <PageTitle title="Convert JSON To Base64" />
        <Flex className="mb-5 overflow-hidden grow  w-full">
          <CodeEditorPanel
            value={jsonContent}
            filename="data.json"
            mime="application/json"
            onChange={setJsonContent}
            validateValue={validateJSON}
            language="json"
            placeholder="Please input a json string or drag and drop a json file here to start"
            editorContainerStyle={{ height: 'calc(80vh - 160px)' }}
          />
          <Flex className="gap-2 mx-2 mt-20" direction="col" justify="start">
            <Tooltip text="json to base64">
              <Button onClick={onJSONToBase64} style={{ width: '30px', height: '30px' }}><ChevronRight size={20} /></Button>
            </Tooltip>
            <Tooltip text="base64 to json ">
              <Button onClick={onBase64ToJson} style={{ width: '30px', height: '30px' }}><ChevronLeft size={20} /></Button>
            </Tooltip>
          </Flex>
          <CodeEditorPanel
            value={base64Content}
            filename="data.txt"
            mime="text/plain"
            onChange={(v) => {
              setBase64Content(v);
            }}
            validateValue={validateBase64}
            editorContainerStyle={{ height: 'calc(80vh - 160px)' }}
            language="csv" />
        </Flex>
      </Flex>
    </>
  );
}