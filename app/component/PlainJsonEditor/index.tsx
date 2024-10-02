"use client"
import React from "react";
import "./index.scss";
import { Button, Card, Flex, AlertDialog, TextArea } from '@radix-ui/themes';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-json';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';


function PlainJSONEditor() {

  const [value, setValue] = React.useState("");
  const [isHighlightMode, setIsHighlightMode] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const preRef = React.useRef(null)

  const formatJson = (obj: any, space: number = 0) => {
    try {
      const obj = JSON.parse(value);
      const formattedStr = JSON.stringify(obj, null, space);
      return formattedStr;
    } catch (error) {
      setOpen(true);
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

  React.useEffect(() => {
    if (isHighlightMode) {
      Prism.highlightElement(preRef.current);
    }
  }, [isHighlightMode])

  const onValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Flex className="app-plain-json-editor-container" style={{ flexDirection: 'column', alignItems: "stretch" }}>
        <Flex style={{ marginBottom: '4px' }} gap="2">
          <Button size="1" variant="surface" onClick={onRawBtnClick}>Compress</Button>
          <Button size="1" variant="surface" onClick={onFormtBtnClick}>Pretty</Button>
          <Button size="1" variant="surface" onClick={onHighlightBtnClick}>Syntax Highlight</Button>
        </Flex>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {isHighlightMode ? <div className="app-highlight-json-block"  >
            <pre className="line-numbers" style={{ whiteSpace: 'pre-wrap', height: '100%' }}>
              <code className="language-json" ref={preRef}>{value}</code>
            </pre>
          </div> : <TextArea
            className="app-plain-json-editor"
            placeholder="please input the json string"
            value={value} onChange={onValueChange}></TextArea>}
        </div>
      </Flex>
      <AlertDialog.Root open={open}>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description size="2">
            json format error
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </AlertDialog.Cancel>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

    </>
  );
}
export default PlainJSONEditor;