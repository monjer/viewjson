import React, { useEffect, useRef } from 'react';
import { basicSetup } from "codemirror";
import { EditorView, keymap } from '@codemirror/view';
import { json } from '@codemirror/lang-json';
import { MergeView } from '@codemirror/merge';
import { EditorState, Compartment } from '@codemirror/state';
import { standardKeymap, indentWithTab } from '@codemirror/commands';
import useEditorTheme from "@/hooks/useEditorTheme";
import Card from '@/components/Card';
import "./index.scss";
import Flex from '../Flex';

const themeConfig = new Compartment();

interface DiffEditorProps {
  originalCode: string;
  modifiedCode: string;
  onOriginalChange?: (value: string) => void;
  onModifiedChange?: (value: string) => void;
}

const DiffEditor: React.FC<DiffEditorProps> = ({
  originalCode,
  modifiedCode,
  onOriginalChange,
  onModifiedChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mergeViewRef = useRef<MergeView | null>(null);
  const prevOriginalRef = useRef(originalCode);
  const prevModifiedRef = useRef(modifiedCode);
  const editorTheme = useEditorTheme();

  // Initialize MergeView
  useEffect(() => {
    if (!containerRef.current) return;

    const mergeView = new MergeView({
      a: {
        doc: originalCode,
        extensions: [
          basicSetup,
          json(),
          themeConfig.of(editorTheme),
          keymap.of([indentWithTab]),
          keymap.of(standardKeymap),
          EditorState.tabSize.of(2),
          EditorView.lineWrapping,
          EditorView.updateListener.of((update) => {
            if (update.docChanged && onOriginalChange) {
              const newValue = update.state.doc.toString();
              if (newValue !== prevOriginalRef.current) {
                prevOriginalRef.current = newValue;
                onOriginalChange(newValue);
              }
            }
          }),
        ],
      },
      b: {
        doc: modifiedCode,
        extensions: [
          basicSetup,
          json(),
          themeConfig.of(editorTheme),
          keymap.of([indentWithTab]),
          keymap.of(standardKeymap),
          EditorState.tabSize.of(2),
          EditorView.lineWrapping,
          EditorView.updateListener.of((update) => {
            if (update.docChanged && onModifiedChange) {
              const newValue = update.state.doc.toString();
              if (newValue !== prevModifiedRef.current) {
                prevModifiedRef.current = newValue;
                onModifiedChange(newValue);
              }
            }
          }),
        ],
      },
      parent: containerRef.current,
      revertControls: "a-to-b",
      gutter: true,
    });

    mergeViewRef.current = mergeView;

    return () => {
      mergeView.destroy();
      mergeViewRef.current = null;
    };
  }, []);

  React.useEffect(() => {
    mergeViewRef?.current?.a?.dispatch({
      effects: themeConfig.reconfigure(editorTheme),
    });
    mergeViewRef?.current?.b?.dispatch({
      effects: themeConfig.reconfigure(editorTheme),
    });
  }, [editorTheme]);

  // Update content when props change
  useEffect(() => {
    if (!mergeViewRef.current) {
      return;
    }

    // Only update if the content has actually changed
    if (originalCode !== prevOriginalRef.current) {
      const aView = mergeViewRef.current.a;
      const transaction = aView.state.update({
        changes: { from: 0, to: aView.state.doc.length, insert: originalCode },
      });
      aView.dispatch(transaction);
      prevOriginalRef.current = originalCode;
    }

    if (modifiedCode !== prevModifiedRef.current) {
      const bView = mergeViewRef.current.b;
      const transaction = bView.state.update({
        changes: { from: 0, to: bView.state.doc.length, insert: modifiedCode },
      });
      bView.dispatch(transaction);
      prevModifiedRef.current = modifiedCode;
    }
  }, [originalCode, modifiedCode]);

  return (
    <Flex direction='col'>
      <div className="flex text-sm w-full">
        <div className="flex-1 bg-gray-800 text-white px-4 py-2 font-medium">Original data</div>
        <div className="flex-1 bg-gray-800 text-white px-4 py-2 font-medium">Compared data</div>
      </div>
      <Card >
        <div ref={containerRef} className="h-[calc(60vh)] overflow-auto" style={{ resize: 'vertical' }} />
      </Card>
    </Flex>
  );
};

export default DiffEditor;