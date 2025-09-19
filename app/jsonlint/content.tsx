'use client';
import React from "react";
import CodeEditorPanel from "@/components/CodeEditorPanel";
import { linter, Diagnostic, lintGutter } from "@/utils/lint";
import PageTitle from "@/components/PageTitle";
import Flex from "@/components/Flex";
import Button from "@/components/Button";
import { useJsonFromUrl } from "@/hooks/useJSONFromURL";

const lintExtension = linter(async (view) => {
  const diagnostics: Diagnostic[] = [];
  const code = view.state.doc.toString();
  if (!code) {
    return [];
  }
  try {
    JSON.parse(code);
    return [];
  } catch (error) {

    const errorMessage = error.message;
    const result = error.message.match(/at position (\d+)/);
    const errorType = error.name;
    if (result) {
      const errorPosition = parseInt(result[1]);
      diagnostics.push({
        from: errorPosition,
        to: errorPosition + 1,
        message: errorMessage,
        severity: "error",
        source: errorType,
      });
    } else {
      diagnostics.push({
        from: 0,
        to: 1,
        message: errorMessage,
        severity: "error",
        source: errorType,
      });
    }

    return diagnostics;
  }
}, {
  hideOn: () => false,
  delay: 0,
  autoPanel: false,
});

export default function JSONLintContent() {
  const [jsonContent, setJsonContent] = React.useState(``);
  const [error, setError] = React.useState(null);
  const editorRef = React.useRef(null);
  const hasError = jsonContent?.trim() && error;
  const errorLine = error?.message?.match(/at position (\d+)/);

  const { data } = useJsonFromUrl();

  React.useEffect(() => {
    if (data) {
      setJsonContent(JSON.stringify(data, null, 2));
    }
  }, [data]);


  function validateJSON() {
    return true;
  }

  function onChange(value) {
    setJsonContent(value);
    try {
      JSON.parse(value);
      setError(null);
    } catch (e) {
      setError(e);
    }
  }

  const onGotoErrorLine = () => {
    if (errorLine && editorRef.current) {
      const errorPosition = parseInt(errorLine[1]);
      editorRef.current.scrollIntoView(errorPosition);

    }
  };


  return (
    <div>
      <CodeEditorPanel
        value={jsonContent}
        filename="data.json"
        mime="application/json"
        onChange={onChange}
        placeholder="Please input a json string or drag and drop a json file here to start"
        validateValue={validateJSON}
        extensions={[lintGutter(), lintExtension]}
        editorContainerStyle={{ height: 'calc(80vh - 160px)' }}
        className={`${hasError ? '!border-red-500' : ''}`}
        language="json"
        editorRef={editorRef}
      />
      {
        hasError && <Flex className="text-red-500 mt-2">
          <div>{jsonContent?.trim() && error?.toString()}</div>
          {errorLine && <Button type="text" onClick={onGotoErrorLine}>Go to error line</Button>}
        </Flex>
      }

    </div >
  );
}