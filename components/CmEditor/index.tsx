import React from "react";
import { EditorView } from "@codemirror/view";
import { EditorState, Compartment, StateField } from '@codemirror/state';
import { basicSetup } from "codemirror";
import { json } from "@codemirror/lang-json";
import { coolGlow, clouds } from 'thememirror';

const themeConfig = new Compartment();

function CmEditor({ code }: { code: string }) {

  const elRef = React.useRef<HTMLDivElement>(null);
  const viewRef = React.useRef<EditorView>(null);

  React.useEffect(() => {
    viewRef.current = new EditorView({
      doc: code,
      extensions: [basicSetup, json(), themeConfig.of(clouds), EditorView.lineWrapping],
      parent: elRef.current
    });
    const targetNode = document.documentElement;
    // 配置观察选项
    const config = { attributes: true, attributeFilter: ['class'] };
    // 创建一个MutationObserver实例，并传入回调函数
    const observer = new MutationObserver((mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          const target = mutation.target as HTMLElement;
          if (target.classList.contains('dark')) {
            viewRef.current.dispatch({
              effects: themeConfig.reconfigure(coolGlow),
            })
          } else {
            console.log('light')
            viewRef.current.dispatch({
              effects: themeConfig.reconfigure(clouds),
            })
          }
        }
      }
    });
    observer.observe(targetNode, config);
    return () => {
      viewRef.current.destroy();
      observer.disconnect();
    }
  }, []);

  React.useEffect(() => {
    if (viewRef.current) {
      const darkMode = document.documentElement.classList.contains('dark');
      viewRef.current.dispatch({
        effects: themeConfig.reconfigure(darkMode ? coolGlow : clouds),
        changes: {
          from: 0,
          to: viewRef.current.state.doc.length,
          insert: code
        }
      });
    }
  }, [code])

  return <div ref={elRef}></div>;
}
export default CmEditor;