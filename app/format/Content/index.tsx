"use client"
import React from "react";
import "./index.scss";
import Button from '@/components/Button'
import Flex from "@/components/Flex";
import PlainView from "./PlainView";
import Toast from "@/components/Toast";
import Popover from "@/components/Popover";
import Input from '@/components/Input'
import HighlightView from "./HighlightView";
import ToJSONStringView from "./ToJSONStringView";
import Divider from "@/components/Divider";

enum ViewType {
  Plain = 'plain',
  Highlight = 'highlight',
  ToJSONString = 'toJSONString'
}

function Main() {

  const [value, setValue] = React.useState('');
  const [toastVisible, setToastVisible] = React.useState(false);
  const [jsonUrl, setJsonUrl] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [popOverVisible, setPopOverVisible] = React.useState(false);
  const [requestTipVisible, setRequestTipVisible] = React.useState(false);
  const [requestSuccess, setRequestSuccess] = React.useState(false);

  const [viewType, setViewType] = React.useState(ViewType.Plain);

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
  const onCompressBtnClick = () => {
    const formattedStr = formatJson(value);
    setViewType(ViewType.Plain);
    setValue(formattedStr);
  };

  const onFormtBtnClick = () => {
    const formattedStr = formatJson(value, 2);
    setViewType(ViewType.Plain);
    setValue(formattedStr);
  };

  const onHighlightBtnClick = () => {
    const formattedStr = formatJson(value, 2);
    setViewType(ViewType.Highlight);
    setValue(formattedStr);
  }

  const onValueChange = (value) => {
    debugger
    setValue(value);
  };

  const onCleanBtnClick = () => {
    setValue('');
  }

  const onLoadBtnClick = async () => {
    setLoading(true);
    let success = true
    try {
      const response = await fetch(jsonUrl);
      const data = await response.json();
      setValue(JSON.stringify(data, null, 2));
    } catch (error) {
      success = false
    }
    setLoading(false);
    setPopOverVisible(false);
    setRequestTipVisible(true);
    setRequestSuccess(success);
    setJsonUrl('');
  }

  const onToJSONString = () => {
    const formattedStr = formatJson(value);
    setValue(formattedStr);
    setViewType(ViewType.ToJSONString);
  }

  const onCopyBtnClick = () => {
    if (!value) {
      Toast.info('Please input json string');
      return;
    }
    const copyValue = {
      [ViewType.Plain]: value,
      [ViewType.Highlight]: value,
      [ViewType.ToJSONString]: JSON.stringify(JSON.stringify(JSON.parse(value))),
    }[viewType]
    navigator.clipboard.writeText(copyValue);
    Toast.success('copy success');

  }

  const renderView = () => {
    const ViewByType = {
      [ViewType.Plain]: <PlainView value={value} onChange={onValueChange} />,
      [ViewType.Highlight]: < HighlightView value={value} />,
      [ViewType.ToJSONString]: <ToJSONStringView value={value} onChange={onValueChange} />,
    }[viewType]
    return ViewByType;
  }

  const onPasetBtnClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setValue(text);
    } catch (err) {
      Toast.error('copy error');
    }
  }

  return (
    <>
      <Flex className="h-full mx-4 mt-4" style={{ flexDirection: 'column', alignItems: "stretch" }}>
        <Flex className="mb-4" gap="2" align="center">
          <Button onClick={onCompressBtnClick}>Minify</Button>
          <Button onClick={onFormtBtnClick}>Pretty</Button>
          <Button onClick={onToJSONString}>To String</Button>
          <Button onClick={onHighlightBtnClick}>Highlight</Button>
          <Divider vertical />
          <Button onClick={onCopyBtnClick}>Copy</Button>
          <Button onClick={onPasetBtnClick}>Paste</Button>
          <Popover
            visible={popOverVisible}
            onVisibleChange={(visible) => {
              setPopOverVisible(visible);
              if (!visible) {
                setJsonUrl('');
              }
            }}
            title="Load JSON from URL"
            content={
              <section style={{ width: '400px' }}>
                <div className="mb-4"><Input value={jsonUrl} onChange={setJsonUrl} /></div>
                <Flex justify="end">
                  <Button onClick={onLoadBtnClick} loading={loading} disabled={loading}>Load</Button>
                </Flex>
              </section>
            }
          >
            <Button >Load</Button>
          </Popover>
          <Button onClick={onCleanBtnClick}>Clean</Button>
        </Flex>
        <div style={{ flex: 1, overflow: 'hidden', }} className="mb-10">
          {renderView()}
        </div>
      </Flex>
      <Toast
        type="error"
        message={"Please input json string!"}
        visible={toastVisible}
        onClose={() => { setToastVisible(false) }}
      />
      <Toast
        message={
          requestSuccess ? "JSON data url request success!" : 'JSON data url request fail!'
        }
        type={requestSuccess ? 'success' : 'error'}
        visible={requestTipVisible}
        onClose={() => { setRequestTipVisible(false) }} />
    </>
  );
}
export default Main;