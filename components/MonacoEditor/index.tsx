import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import { editor } from 'monaco-editor';
import { useTheme } from 'next-themes';

interface MonacoEditorProps {
  value?: string;
  language?: string;
  onChange?: (value: string) => void;
  height?: string;
  options?: editor.IStandaloneEditorConstructionOptions;
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({
  value = '',
  language = 'javascript',
  onChange,
  height = '100%',
  options = {}
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const { theme } = useTheme();

  // Initialize editor
  useEffect(() => {
    if (!containerRef.current) return;

    const defaultOptions: editor.IStandaloneEditorConstructionOptions = {
      value,
      language,
      theme: theme === 'dark' ? 'vs-dark' : 'vs',
      automaticLayout: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      fontSize: 14,
      lineNumbers: 'on',
      roundedSelection: false,
      scrollbar: {
        useShadows: false,
        vertical: 'visible',
        horizontal: 'visible',
      },
      ...options
    };

    editorRef.current = monaco.editor.create(containerRef.current, defaultOptions);

    // Add change listener
    editorRef.current.onDidChangeModelContent(() => {
      const newValue = editorRef.current?.getValue();
      onChange?.(newValue || '');
    });

    return () => {
      editorRef.current?.dispose();
    };
  }, []);

  // Update value when prop changes
  useEffect(() => {
    if (editorRef.current) {
      const currentValue = editorRef.current.getValue();
      if (value !== currentValue) {
        editorRef.current.setValue(value);
      }
    }
  }, [value]);

  // Update theme when it changes
  useEffect(() => {
    if (editorRef.current) {
      monaco.editor.setTheme(theme === 'dark' ? 'vs-dark' : 'vs');
    }
  }, [theme]);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height }}
    />
  );
};

export default MonacoEditor;