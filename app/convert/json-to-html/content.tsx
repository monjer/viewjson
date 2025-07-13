'use client';
import React from "react";
import Flex from "@/components/Flex";
import Button from "@/components/Button";
import CodeEditorPanel from "@/components/CodeEditorPanel";
import Toast from "@/components/Toast";
import { ChevronRight } from 'lucide-react';
import Tooltip from "@/components/Tooltip";
import PageTitle from "@/components/PageTitle";
import json2html from '@/utils/json2html';
import { useJsonFromUrl } from "@/hooks/useJSONFromURL";

export default function Layout() {
  const [htmlContent, setHTMLContent] = React.useState('');
  const [jsonContent, setJsonContent] = React.useState('');
  const { data } = useJsonFromUrl();

  React.useEffect(() => {
    if (data) {
      setJsonContent(JSON.stringify(data, null, 2));
    }
  }, [data]);

  const onJSONToHTML = () => {
    if (!validateJSON(jsonContent)) {
      Toast.error('Please input JSON string');
      return;
    }
    const htmlStr = json2html(JSON.parse(jsonContent));
    setHTMLContent(htmlStr);
  };

  function validateJSON(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  function validateHTML() {
    return true;
  }
  return (
    <Flex className="h-full w-full" direction="col">
      <PageTitle title="Convert JSON To HTML Table" />
      <Flex className="mb-5 overflow-hidden grow w-full">
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
          <Tooltip text="json to html">
            <Button onClick={onJSONToHTML} style={{ width: '30px', height: '30px' }}><ChevronRight size={20} /></Button>
          </Tooltip>
        </Flex>
        <CodeEditorPanel
          value={htmlContent}
          filename="data.html"
          mime="text/html"
          onChange={(v) => {
            setHTMLContent(v);
          }}
          validateValue={validateHTML}
          actionButtonVisible={false}
          editorContainerStyle={{ height: 'calc(80vh - 160px)' }}
          language="html" />
      </Flex>
    </Flex>
  );
}