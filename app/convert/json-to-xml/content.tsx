'use client';
import React from "react";
import Flex from "@/components/Flex";
import Button from "@/components/Button";
import { json2xml, xml2json } from 'xml-js';
import CodeEditorPanel from "@/components/CodeEditorPanel";
import Toast from "@/components/Toast";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Tooltip from "@/components/Tooltip";
import PageTitle from "@/components/PageTitle";

export default function Layout() {
  const [xmlContent, setXMLContent] = React.useState('');
  const [jsonContent, setJsonContent] = React.useState('');

  const onJSONToXML = () => {
    if (!validateJSON(jsonContent)) {
      Toast.error('Please input JSON string');
      return;
    }
    const $declaration = { _attributes: { version: "1.0", encoding: "utf-8" } };
    const obj = JSON.parse(jsonContent);
    const jsonStr = json2xml(JSON.stringify({
      $declaration, // 添加declaration声明 <?xml version="1.0" encoding="utf-8"?>
      ...obj,
    }), {
      compact: true,
      spaces: 4,
      ignoreDoctype: true,
      declarationKey: '$declaration',
    });
    setXMLContent(jsonStr);
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

  const onXMLToJson = () => {
    if (!validateXML(xmlContent)) {
      Toast.error('Please input xml string');
      return;
    }
    // https://github.com/nashwaan/xml-js/issues/53
    const options = {
      compact: true,
      trim: true,
      spaces: 2,
      ignoreDeclaration: true,
      ignoreInstruction: true,
      ignoreAttributes: true,
      ignoreComment: true,
      ignoreCdata: true,
      ignoreDoctype: true,
      textFn: removeJsonTextAttribute,
    };
    const xmlStr = xml2json(xmlContent, options);
    const obj = JSON.parse(xmlStr);
    setJsonContent(JSON.stringify(obj, null, 2));
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
      <PageTitle title="Convert JSON To XML" />
      <Flex className="mb-5 grow  w-full">
        <CodeEditorPanel
          value={jsonContent}
          filename="data.json"
          mime="application/json"
          onChange={setJsonContent}
          validateValue={validateJSON}
          language="json"
          editorContainerStyle={{ height: 'calc(80vh - 160px)' }}
          placeholder="Input a json string"
        />
        <Flex className="gap-2 mx-2 mt-20" direction="col" justify="start">
          <Tooltip text="json to xml">
            <Button onClick={onJSONToXML} style={{ width: '30px', height: '30px' }}><ChevronRight size={20} /></Button>
          </Tooltip>
          <Tooltip text="xml to json ">
            <Button onClick={onXMLToJson} style={{ width: '30px', height: '30px' }}><ChevronLeft size={20} /></Button>
          </Tooltip>
        </Flex>
        <CodeEditorPanel
          value={xmlContent}
          filename="data.xml"
          mime="text/xml"
          onChange={(v) => {
            console.log(v);
            setXMLContent(v);
          }}
          validateValue={validateXML}
          editorContainerStyle={{ height: 'calc(80vh - 160px)' }}
          language="xml" />
      </Flex>
    </Flex>
  );
}