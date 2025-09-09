'use client';
import React from "react";
import Flex from "@/components/Flex";
import Button from "@/components/Button";
import CodeEditorPanel from "@/components/CodeEditorPanel";
import Toast from "@/components/Toast";
import yaml from 'yaml';
import Tooltip from "@/components/Tooltip";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import PageTitle from "@/components/PageTitle";
import { useJsonFromUrl } from "@/hooks/useJSONFromURL";

export default function Page() {
  const [jsonContent, setJsonContent] = React.useState('');
  const [yamlContent, setYamlContent] = React.useState('');
  const { data } = useJsonFromUrl();

  React.useEffect(() => {
    if (data) {
      setJsonContent(JSON.stringify(data, null, 2));
    }
  }, [data]);


  const onJSONToYAML = () => {
    if (!validateJSON(jsonContent)) {
      Toast.error('Json string format error');
      return;
    }
    const yamlStr = yaml.stringify(JSON.parse(jsonContent));
    setYamlContent(yamlStr);
  };

  const onYamlToJSON = () => {
    try {
      const object = yaml.parse(yamlContent);
      setJsonContent(JSON.stringify(object, null, 2));
    } catch (error) {
      Toast.error('YAML string format error');
    }
  };

  function validateJSON(str) {
    try {
      JSON.parse(str);
    } catch (error) {
      return false;
    }
    return true;
  }
  function validateYAML() {
    return true;
  }

  return (
    <Flex className="h-full w-full" direction="col">
      <PageTitle title="Convert JSON To YAML" />
      <Flex className="mb-5 overflow-hidden w-full grow">
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
          <Tooltip text="json to yaml">
            <Button onClick={onJSONToYAML} style={{ width: '30px', height: '30px' }}><ChevronRight size={20} /></Button>
          </Tooltip>
          <Tooltip text="yaml to json ">
            <Button onClick={onYamlToJSON} style={{ width: '30px', height: '30px' }}><ChevronLeft size={20} /></Button>
          </Tooltip>
        </Flex>
        <CodeEditorPanel
          value={yamlContent}
          filename="data.yaml"
          mime="text/yaml"
          onChange={setYamlContent}
          validateValue={validateYAML}
          editorContainerStyle={{ height: 'calc(80vh - 160px)' }}
          language="yaml" />
      </Flex>
    </Flex>
  );
}