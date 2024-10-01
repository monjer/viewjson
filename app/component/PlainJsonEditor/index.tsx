"use client"
import React from "react";
import "./index.scss";
import { Button, Flex, Space } from "antd";
import Prism from 'prismjs';
import 'prism-themes/themes/prism-lucario.css';
import 'prismjs/components/prism-json';
// 引入行号插件
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';


function PlainJSONEditor() {

  const [value, setValue] = React.useState("");
  const [isHighlightMode, setIsHighlightMode] = React.useState(false);
  const preRef = React.useRef(null)

  const onRawBtnClick = () => {
    setIsHighlightMode(false)
    const obj = JSON.parse(value);
    const formattedStr = JSON.stringify(obj, null, 0);
    setValue(formattedStr);
  };

  const onFormtBtnClick = () => {
    setIsHighlightMode(false)
    const obj = JSON.parse(value);
    const formattedStr = JSON.stringify(obj, null, 2);
    setValue(formattedStr);
  };

  const onHighlightBtnClick = () => {
    setIsHighlightMode(true)
    const obj = JSON.parse(value);
    const formattedStr = JSON.stringify(obj, null, 2);
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
    <Flex className="app-plain-json-editor-container" style={{ flexDirection: 'column', alignItems: "stretch" }}>
      <Space style={{ marginBottom: '4px' }}>
        <Button type="text" size="small" onClick={onRawBtnClick}>Raw</Button>
        <Button type="text" size="small" onClick={onFormtBtnClick}>Format</Button>
        <Button type="text" size="small" onClick={onHighlightBtnClick}>Highlight</Button>
      </Space>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {isHighlightMode ? <div className="app-highlight-json-block"  >
          <pre className="line-numbers" style={{ whiteSpace: 'pre-wrap' }}>
            <code className="language-json" ref={preRef}>{value}</code>
          </pre>
        </div> : <textarea
          className="app-plain-json-editor"
          placeholder="please input the json string"
          value={value} onChange={onValueChange}></textarea>}
      </div>
    </Flex>
  );
}
export default PlainJSONEditor;