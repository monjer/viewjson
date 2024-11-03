'use client'
import React from "react";
import Flex from "@/components/Flex";
import Button from "@/components/Button";
import CodeEditorPanel from "@/components/CodeEditorPanel";
import Toast from "@/components/Toast";
import yaml from 'yaml'

export default function Layout() {
  const [jsonContent, setJsonContent] = React.useState('')
  const [yamlContent, setYamlContent] = React.useState('')

  const onJSONToYAML = () => {
    if (!validateJSON(jsonContent)) {
      Toast.error('Json string format error');
      return;
    }
    const yamlStr = yaml.stringify(JSON.parse(jsonContent));
    setYamlContent(yamlStr);
  }

  const onYamlToJSON = () => {
    try {
      const object = yaml.parse(yamlContent);
      setJsonContent(JSON.stringify(object, null, 2));
    } catch (error) {
      Toast.error('YAML string format error');
    }
  }

  function validateJSON(str) {
    try {
      JSON.parse(str);
    } catch (error) {
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
      <h1 className="text-2xl font-bold my-6" >JSON To YAML</h1>
      <Flex className="mb-5 overflow-hidden grow">
        <CodeEditorPanel
          value={jsonContent}
          filename="data.json"
          mime="application/json"
          onChange={setJsonContent}
          validateValue={validateJSON}
          language="json"
        />
        <Flex className="gap-2 mx-2 mt-20" direction="col" style={{ width: '100px' }} justify="start">
          <Button onClick={onJSONToYAML}>json-to-xml</Button>
          <Button onClick={onYamlToJSON}>xml-to-json</Button>
        </Flex>
        <CodeEditorPanel
          value={yamlContent}
          filename="data.yaml"
          mime="text/yaml"
          onChange={setYamlContent}
          validateValue={validateXML}
          language="yaml" />
      </Flex>
    </Flex>
  );
}