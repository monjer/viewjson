"use client"
import React from "react";
import "./index.scss";
import Button from '@/component/Button'
import Flex from "../Flex";
import Card from '@/component/Card'
import CmEditor from "../CmEditor";
import TextArea from "../TextArea";
import Toast from "../Toast";
// import useDarkMode from "../../hooks/useDarkMode";
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
  // console.log('----   ', useDarkMode())

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

  const onLoadBtnClick = () => {

  }

  return (
    <>
      <Flex className="app-plain-json-editor-container mx-4" style={{ flexDirection: 'column', alignItems: "stretch" }}>
        <Flex className="mb-2" gap="2">
          <Button size="1" variant="surface" onClick={onRawBtnClick}>Compress</Button>
          <Button size="1" variant="surface" onClick={onFormtBtnClick}>Format</Button>
          <Button size="1" variant="surface" onClick={onHighlightBtnClick}>Highlight</Button>
          <Button size="1" variant="surface" onClick={onCleanBtnClick}>Clean</Button>
          <Button size="1" variant="surface" onClick={onLoadBtnClick}>Load JSON from URL</Button>
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
    </>
  );
}
export default Main;