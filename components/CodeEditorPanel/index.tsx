"use client";
import React from "react";
import Button from '@/components/Button';
import Flex from "@/components/Flex";
import Toast from "@/components/Toast";
import Popover from "@/components/Popover";
import Input from '@/components/Input';
import Divider from "@/components/Divider";
import UploadButton from "@/components/UploadButton";
import { readFileAsText } from "@/utils";
import Dropzone from '@/components/Dropzone';
import Card from "@/components/Card";
import CmEditor from "@/components/CmEditor";
import { getLanguage } from "@/utils";
import { Extension } from '@codemirror/state';
import formatCode from "@/utils/formatCode";

enum ErrrorType {
  UploadError = 'UploadError',
  InputError = 'InputError'
}

interface Props {
  filename?: string;
  mime?: string;
  value?: string;
  defaulValue?: string;
  validateValue?: (value: string) => boolean;
  onChange?: (value: string) => void;
  language?: string;
  extensions?: Extension[],
  actionButtonVisible?: boolean,
  placeholder?: string;
}


function CodeEditorPanel(props: Props) {
  const { filename, mime, language = 'json', validateValue, extensions = [], actionButtonVisible = true, placeholder = '' } = props;
  const [value, setValue] = React.useState(props.defaulValue || props.value || '');
  const [toastVisible, setToastVisible] = React.useState(false);
  const [jsonUrl, setJsonUrl] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [popOverVisible, setPopOverVisible] = React.useState(false);
  const [requestTipVisible, setRequestTipVisible] = React.useState(false);
  const [requestSuccess, setRequestSuccess] = React.useState(false);
  const langExtension = getLanguage(language);

  const getErrorMessage = (type: ErrrorType) => {
    return {
      [ErrrorType.UploadError]: `Please upload a ${language} file`,
      [ErrrorType.InputError]: `Please input ${language} string`,
    }[type];
  };

  const updateValeue = (val: string) => {
    if ('value' in props) {
      props.onChange(val);
    } else {
      setValue(value);
    }
  };

  const onValueChange = (value) => {
    updateValeue(value);
  };

  const onCleanBtnClick = () => {
    updateValeue('');
  };

  const onLoadBtnClick = async () => {
    setLoading(true);
    let success = true;
    try {
      const response = await fetch(jsonUrl);
      const data = await response.json();
      updateValeue(JSON.stringify(data, null, 2));

    } catch (error) {
      success = false;
    }
    setLoading(false);
    setPopOverVisible(false);
    setRequestTipVisible(true);
    setRequestSuccess(success);
    setJsonUrl('');
  };

  const onCopyBtnClick = () => {
    if (!value) {
      Toast.info(getErrorMessage(ErrrorType.InputError));
      return;
    }
    navigator.clipboard.writeText(value);
    Toast.success('copy success');

  };

  const onPasetBtnClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (validateValue(text)) {
        updateValeue(text);
      } else {
        Toast.error(getErrorMessage(ErrrorType.InputError));
      }
    } catch (err) {
      Toast.error('copy error');
    }
  };

  const onLoadFile = async (file) => {
    try {
      const jsontext = await readFileAsText(file);
      if (validateValue(jsontext)) {
        updateValeue(jsontext);
      } else {
        Toast.error(getErrorMessage(ErrrorType.UploadError));
      }

    } catch (error) {
      Toast.error(getErrorMessage(ErrrorType.UploadError));
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
      Toast.info(getErrorMessage(ErrrorType.InputError));
      return;
    }
    downloadStringAsFile(value, filename, mime);
    Toast.success('Download success');
  };

  const onPrettyPrintBtnClick = async () => {
    const formattedStr = await formatCode(value, language);
    setValue(formattedStr);
  };

  React.useEffect(() => {
    if ('value' in props) {
      setValue(props.value);
    }
  }, [props.value]);

  return (
    <>
      <Flex className="h-full w-full" style={{ flexDirection: 'column', alignItems: "stretch" }}>
        <Flex className="my-4" gap="2" align="center">
          {
            actionButtonVisible && (
              <>
                <UploadButton onChange={onLoadFile} title={`upload a ${language} file`} >Upload File</UploadButton>
                <Popover
                  visible={popOverVisible}
                  onVisibleChange={(visible) => {
                    setPopOverVisible(visible);
                    if (!visible) {
                      setJsonUrl('');
                    }
                  }}
                  title={`Load ${language} data from URL`}
                  content={
                    <section style={{ width: '400px' }}>
                      <div className="mb-4"><Input value={jsonUrl} onChange={setJsonUrl} /></div>
                      <Flex justify="end">
                        <Button onClick={onLoadBtnClick} loading={loading} disabled={loading}>Load</Button>
                      </Flex>
                    </section>
                  }
                >
                  <Button title={`request ${language} data from a url`} >Load From URL</Button>
                </Popover>
                <Button title={`paste ${language} string from clipboard`} onClick={onPasetBtnClick}>Paste</Button>
                <Divider vertical />
              </>
            )
          }
          <Button title={`format ${language} string`} onClick={onPrettyPrintBtnClick}>Format</Button>
          <Button title={`copy ${language} string to clipboard`} onClick={onCopyBtnClick}>Copy</Button>
          <Button title={`save and download ${language} string as file`} onClick={onDownloadBtnClick}>Save</Button>
          <Divider vertical />
          <Button title={`clean ${language} string`} onClick={onCleanBtnClick}>Clean</Button>

        </Flex>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Dropzone onChange={acceptedFiles => onLoadFile(acceptedFiles[0])}>
            <Card className="app-highlight-json-block h-[calc(60vh)] w-full overflow-auto resize-y" >
              <CmEditor placeholder={placeholder} code={value} onChange={onValueChange} extensions={[langExtension, ...extensions]} />
            </Card>
          </Dropzone>
        </div>
      </Flex>
      <Toast
        type="error"
        message={`Please input ${language} string!`}
        visible={toastVisible}
        onClose={() => { setToastVisible(false); }}
      />
      <Toast
        message={
          requestSuccess ? `${language} data url request success!` : `${language} data url request fail!`
        }
        type={requestSuccess ? 'success' : 'error'}
        visible={requestTipVisible}
        onClose={() => { setRequestTipVisible(false); }} />
    </>
  );
}
export default CodeEditorPanel;