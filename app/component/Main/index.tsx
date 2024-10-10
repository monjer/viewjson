"use client"
import React from "react";
import "./index.scss";
import Button from '@/component/Button'
import Flex from "../Flex";
import Card from '@/component/Card'
import CmEditor from "../CmEditor";
import TextArea from "../TextArea";
import Toast from "../Toast";
import Popover from "../Popover";
import Input from '../Input'
function Main() {

  const [value, setValue] = React.useState(`
    [{
        "id": 1,
        "name": "John Doe",
        "age": 30,
        "car": null
      },
      {
        "id": 2,
        "name": "Jane Doe",
        "age": 25,
        "car": {
          "brand": "Ford",
          "model": "Mustang"
        }
      }
    ]
`);
  const [isHighlightMode, setIsHighlightMode] = React.useState(false);
  const [toastVisible, setToastVisible] = React.useState(false);
  const [jsonUrl, setJsonUrl] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [popOverVisible, setPopOverVisible] = React.useState(false);
  const [requestTipVisible, setRequestTipVisible] = React.useState(false);


  const formatJson = (obj: any, space: number = 0) => {
    try {
      const obj = JSON.parse(value);
      const formattedStr = JSON.stringify(obj, null, space);
      return formattedStr;
    } catch (error) {
      setToastVisible(true);
      return obj;
    }

  }
  const onRawBtnClick = () => {
    setIsHighlightMode(false)
    const formattedStr = formatJson(value);
    setValue(formattedStr);
  };

  const onFormtBtnClick = () => {
    setIsHighlightMode(false)
    const formattedStr = formatJson(value, 2);
    setValue(formattedStr);
  };

  const onHighlightBtnClick = () => {
    setIsHighlightMode(true)
    const formattedStr = formatJson(value, 2);
    setValue(formattedStr);
  }

  const onValueChange = (e) => {
    setValue(e.target.value);
  };

  const onCleanBtnClick = () => {
    setValue('');
  }

  const onLoadBtnClick = async () => {
    setLoading(true);
    const response = await fetch(jsonUrl);
    const data = await response.json();
    setValue(JSON.stringify(data, null, 2));
    setLoading(false);
    setPopOverVisible(false);
    setRequestTipVisible(true)
  }

  return (
    <>
      <Flex className="app-plain-json-editor-container mx-4" style={{ flexDirection: 'column', alignItems: "stretch" }}>
        <Flex className="mb-2" gap="2">
          <Button onClick={onRawBtnClick}>Compress</Button>
          <Button onClick={onFormtBtnClick}>Format</Button>
          <Button onClick={onHighlightBtnClick}>Highlight</Button>
          <Button onClick={onCleanBtnClick}>Clean</Button>
          <Popover
            visible={popOverVisible}
            onVisibleChange={setPopOverVisible}
            content={
              <section style={{ width: '400px' }} className="p-4">
                <h1 className="text-md font-bold mb-4">Load JSON from URL</h1>
                <div className="mb-4"><Input value={jsonUrl} onChange={setJsonUrl} /></div>
                <Flex justify="end">
                  <Button onClick={onLoadBtnClick} loading={loading} disabled={loading}>Load</Button>
                </Flex>
              </section>
            }
          ><Button >Load JSON from URL</Button></Popover>
        </Flex>
        <div style={{ flex: 1, overflow: 'hidden', }} className="mb-10">
          {isHighlightMode ?
            <Card className="app-highlight-json-block h-full w-full overflow-auto" >
              <CmEditor code={value} />
            </Card>
            : <Card className="h-full w-full overflow-hidden">
              <TextArea
                placeholder="please input the json string"
                value={value} onChange={onValueChange}></TextArea>
            </Card>}
        </div>
      </Flex>
      <Toast message={"tis is a message"} visible={toastVisible} onClose={() => { setToastVisible(false) }} />
      <Toast message={"JSON data url request success!"} visible={requestTipVisible} onClose={() => { setRequestTipVisible(false) }} />
    </>
  );
}
export default Main;