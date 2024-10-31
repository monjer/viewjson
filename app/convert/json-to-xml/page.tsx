'use client'
import React from "react";
import Flex from "@/components/Flex";
import CmEditor from "@/components/CmEditor";
import Card from "@/components/Card";
import ResponseContainer from "@/slots/ResponseContainer";
import Button from "@/components/Button";
import convert from 'xml-js'

export default function Layout() {
  const [xmlContent, setXMLContent] = React.useState('')
  const [jsonContent, setJsonContent] = React.useState('')
  React.useEffect(() => {
    console.log(window.XMLParser)
    // const parser = new fxparser.XMLParser();
    // parser.parse(xmlContent);
  });

  const onJSONToXML = () => {
    const jsonStr = convert.json2xml(jsonContent, { compact: true, spaces: 4 });
    console.log(jsonStr)
    setXMLContent(jsonStr)
  }

  const onXMLToJson = () => {
    const xmlStr = convert.json2xml(xmlContent);
    console.log(xmlStr)
  }
  return (
    <>
      <h1 className="text-2xl mb-3" >JSON To XML</h1>
      <Flex className="h-full overflow-hidden">
        <Card>
          <CmEditor code={jsonContent} onChange={(c) => { console.log(c); setJsonContent(c) }} />
        </Card>
        <Flex className="gap-2 mx-2 mt-10" direction="col" style={{ width: '100px' }} justify="start">
          <Button onClick={onJSONToXML}>json-to-xml</Button>
          <Button onClick={onXMLToJson}>xml-to-json</Button>
        </Flex>
        <Card>
          <CmEditor code={xmlContent} onChange={setXMLContent} />
        </Card>
      </Flex>
    </>
  );
}