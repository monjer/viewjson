'use client';
import React from "react";
import CodeEditorPanel from "@/components/CodeEditorPanel";
import { linter, Diagnostic, lintGutter } from "@/utils/lint";
import PageTitle from "@/components/PageTitle";

export default function Page() {
  const [jsonContent, setJsonContent] = React.useState(``);

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
          markClass: "xxxx",
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

  function validateJSON() {
    return true;
  }

  function onChange(value) {
    setJsonContent(value);
  }

  return (
    <div  >
      <PageTitle title="JSON Validate" />
      <CodeEditorPanel
        value={jsonContent}
        filename="data.json"
        mime="application/json"
        onChange={onChange}
        placeholder="Input a json string"
        validateValue={validateJSON}
        extensions={[lintExtension, lintGutter()]}
        language="json" />
    </div >
  );
}