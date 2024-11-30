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

export default function Layout() {
  const [xmlContent, setHTMLContent] = React.useState('');
  const [jsonContent, setJsonContent] = React.useState('');

  const onJSONToHTML = () => {
    if (!validateJSON(jsonContent)) {
      Toast.error('Please input JSON string');
      return;
    }
    const htmlStr = json2html(JSON.parse(jsonContent));
    setHTMLContent(htmlStr);
  };


  function nativeType(value) {
    const nValue = Number(value);
    if (!isNaN(nValue)) {
      return nValue;
    }
    const bValue = value.toLowerCase();
    if (bValue === 'true') {
      return true;
    } else if (bValue === 'false') {
      return false;
    }
    return value;
  }


  const removeJsonTextAttribute = function (value, parentElement) {
    try {
      const keyNo = Object.keys(parentElement._parent).length;
      const keyName = Object.keys(parentElement._parent)[keyNo - 1];
      parentElement._parent[keyName] = nativeType(value);
    } catch (error) {
      console.log(error);
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

  function validateXML(str) {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(str, "text/xml");
      // 检查解析后的结果是否包含错误
      const hasError = xmlDoc.getElementsByTagName("parsererror").length > 0;
      return !hasError;
    } catch (e) {
      // 如果捕获到异常，说明字符串不是有效的XML
      return false;
    }
  }
  return (
    <Flex className="h-full w-full" direction="col">
      <PageTitle title="JSON To HTML" />
      <Flex className="mb-5 overflow-hidden grow">
        <CodeEditorPanel
          value={jsonContent}
          filename="data.json"
          mime="application/json"
          onChange={setJsonContent}
          validateValue={validateJSON}
          language="json"
        />
        <Flex className="gap-2 mx-4 mt-20" direction="col" justify="start">
          <Tooltip text="json to html">
            <Button onClick={onJSONToHTML} style={{ width: '30px', height: '30px' }}><ChevronRight size={20} /></Button>
          </Tooltip>
        </Flex>
        <CodeEditorPanel
          value={xmlContent}
          filename="data.html"
          mime="text/html"
          onChange={(v) => {
            setHTMLContent(v);
          }}
          validateValue={validateXML}
          actionButtonVisible={false}
          language="html" />
      </Flex>
    </Flex>
  );
}