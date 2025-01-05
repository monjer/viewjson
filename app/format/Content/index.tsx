"use client";
import React from "react";
import "./index.scss";
import Button from '@/components/Button';
import Flex from "@/components/Flex";
import PlainView from "./PlainView";
import Toast from "@/components/Toast";
import Popover from "@/components/Popover";
import Input from '@/components/Input';
import HighlightView from "./HighlightView";
import ToJSONStringView from "./ToJSONStringView";
import Divider from "@/components/Divider";
import UploadButton from "@/components/UploadButton";
import { readFileAsText } from "@/utils";
import Dropzone from '@/components/Dropzone';
import { Download, Copy, Eraser, ClipboardPaste, Upload, CloudDownload, FileCode, Expand, FolderCode, Highlighter, Shrink, ReceiptText } from "lucide-react";

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
  const [expand, setExpand] = React.useState(false);

  const [viewType, setViewType] = React.useState(ViewType.Plain);

  const formatJson = (obj: string, space = 0) => {
    try {
      const obj = JSON.parse(value);
      const formattedStr = JSON.stringify(obj, null, space);
      return formattedStr;
    } catch (error) {
      setToastVisible(true);
      return obj;
    }
  };
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
  };

  const onValueChange = (value) => {
    setValue(value);
  };

  const onCleanBtnClick = () => {
    setValue('');
  };

  function validateJson(str, errorMsg = 'Please input json string') {
    try {
      JSON.parse(str);

    } catch (e) {
      Toast.error(errorMsg);
      return false;
    }
    return true;
  }

  const onLoadBtnClick = async () => {
    setLoading(true);
    let success = true;
    try {
      const response = await fetch(jsonUrl);
      const data = await response.json();
      setValue(JSON.stringify(data, null, 2));

    } catch (error) {
      success = false;
    }
    setLoading(false);
    setPopOverVisible(false);
    setRequestTipVisible(true);
    setRequestSuccess(success);
    setJsonUrl('');
  };

  const onToJSONString = () => {
    const formattedStr = formatJson(value);
    setValue(formattedStr);
    setViewType(ViewType.ToJSONString);
  };

  const getValueBuType = () => {
    const val = {
      [ViewType.Plain]: value,
      [ViewType.Highlight]: value,
      [ViewType.ToJSONString]: JSON.stringify(JSON.stringify(JSON.parse(value))),
    }[viewType];
    return val;
  };

  const onCopyBtnClick = () => {
    if (!value) {
      Toast.info('Please input json string');
      return;
    }
    const copyValue = getValueBuType();
    navigator.clipboard.writeText(copyValue);
    Toast.success('copy success');

  };

  const renderView = () => {
    const ViewByType = {
      [ViewType.Plain]: <PlainView value={value} onChange={onValueChange} />,
      [ViewType.Highlight]: < HighlightView value={value} />,
      [ViewType.ToJSONString]: <ToJSONStringView value={value} onChange={onValueChange} />,
    }[viewType];
    return ViewByType;
  };

  const onPasetBtnClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (validateJson(text, 'Please copy a json string')) {
        setValue(text);
      }

    } catch (err) {
      Toast.error('copy error');
    }
  };

  const onLoadFile = async (file) => {
    try {
      const jsontext = await readFileAsText(file);
      if (validateJson(jsontext, 'Please upload a json file')) {
        setValue(jsontext);
      }

    } catch (error) {
      Toast.error('Please upload a json file');
    }
  };

  const downloadStringAsFile = (str, filename, mimeType = 'text/plain') => {
    const blob = new Blob([str], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const onDownloadBtnClick = () => {
    if (!value) {
      Toast.info('Please input json string');
      return;
    }
    if (validateJson(value, 'Please input a json string')) {
      const val = getValueBuType();
      const mime = ViewType.ToJSONString === viewType ? 'text/plain' : 'application/json';
      const filename = ViewType.ToJSONString === viewType ? 'data.txt' : 'data.json';
      downloadStringAsFile(val, filename, mime);
      Toast.success('Download success');
    }

  };

  const onExpandBtnClick = () => {
    setExpand(!expand);
  };

  const editorClassname = expand ? 'fixed bottom-0 left-0 top-[60px] right-0 bg-white dark:bg-gray-950 p-6' : '';
  return (
    <div className={editorClassname}>
      <Flex style={{ flexDirection: 'column', alignItems: "stretch" }}>
        <Flex className="mb-2" align="center" justify="between">
          <Flex gap="2" align="center">
            <Button title="minify json string" onClick={onCompressBtnClick}><FolderCode size={14} className="mr-1" />Minify</Button>
            <Button title="pretty json string" onClick={onFormtBtnClick}><FileCode size={14} className="mr-1" /> Format</Button>
            <Button title="stringify json string" onClick={onToJSONString}> <ReceiptText size={14} className="mr-1" />Stringify</Button>
            <Button title="highlight json string" onClick={onHighlightBtnClick}><Highlighter size={14} className="mr-1" />Highlight</Button>
            <Divider vertical />
            <UploadButton title="upload a json file " onChange={onLoadFile} >
              <Flex>
                <Upload size={14} className="mr-1" /> Upload
              </Flex>
            </UploadButton>
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
                    <Button title="request json data from a url" onClick={onLoadBtnClick} loading={loading} disabled={loading}>Load</Button>
                  </Flex>
                </section>
              }
            >
              <Button title="request json data from a url"><CloudDownload size={14} className="mr-1" /> Request</Button>
            </Popover>
            <Button onClick={onPasetBtnClick} title="paste json string"><ClipboardPaste size={14} className="mr-1" /> Paste</Button>
            <Divider vertical />
            <Button onClick={onCopyBtnClick} title="copy json string"><Copy size={14} className="mr-1" /> Copy</Button>
            <Button onClick={onDownloadBtnClick} title="save json string and download as a file"><Download size={14} className="mr-1" />Save</Button>
            <Divider vertical />
            <Button onClick={onCleanBtnClick} title="clean json string"><Eraser size={14} className="mr-1" />Clean</Button>
          </Flex>
          <Button type="text" onClick={onExpandBtnClick}>
            {expand ? <Shrink size={16} className="mr-1" /> : <Expand size={16} className="mr-1" />}
          </Button>
        </Flex>
        <div style={{ flex: 1, overflow: 'hidden' }} >
          <Dropzone onChange={acceptedFiles => onLoadFile(acceptedFiles[0])}>
            <div className="resize-board">
              {renderView()}
            </div>
          </Dropzone>
        </div>
      </Flex>
      <Toast
        type="error"
        message={"Please input json string!"}
        visible={toastVisible}
        onClose={() => { setToastVisible(false); }}
      />
      <Toast
        message={
          requestSuccess ? "JSON data url request success!" : 'JSON data url request fail!'
        }
        type={requestSuccess ? 'success' : 'error'}
        visible={requestTipVisible}
        onClose={() => { setRequestTipVisible(false); }} />
    </div>
  );
}
export default Main;