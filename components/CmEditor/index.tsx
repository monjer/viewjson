import React from "react";
import { EditorView, keymap, ViewUpdate } from "@codemirror/view";
import { EditorState, Compartment, StateField, EditorSelection, Extension } from '@codemirror/state';
import { basicSetup } from "codemirror";
import { coolGlow, clouds } from 'thememirror';
import { standardKeymap, indentWithTab } from '@codemirror/commands';

const themeConfig = new Compartment();

/**
 * 在光标所在位置插入Tab，codemirror6默认没有加入tab的绑定
 * @see https://codemirror.net/examples/tab/
 * @see https://codemirror.net/docs/ref/#commands.indentWithTab
 */
export const insertTabAtCoursor = keymap.of([{
  key: 'Tab',
  run: (view) => {
    const changes = view.state.changeByRange((range) => {
      if (range.empty) {
        return {
          changes: { from: range.from, insert: '\t' },
          range: EditorSelection.cursor(range.from + 1)
        };
      } else {
        return {
          changes: { from: range.from, insert: '\t' },
          range: EditorSelection.cursor(range.from + 1)
        };
      }

    });
    view.dispatch(changes);
    return true;
  }
}]);

type CMEditorProps = {
  code: string
  onChange?: (code: string) => void
  extensions?: Extension[]
}

function CmEditor({ code, onChange, extensions }: CMEditorProps) {

  const elRef = React.useRef<HTMLDivElement>(null);
  const viewRef = React.useRef<EditorView>(null);
  const [cursorPosition, setCursorPosition] = React.useState(null);

  function onEditorChange(viewUpdate: ViewUpdate) {
    if (viewUpdate.changes) {
      const newValue = viewUpdate.state.doc.toString();
      onChange(newValue);
    }
  }


  const saveCommand = () => {
    const editorCode = viewRef.current.state.doc.toString();
    onChange && onChange(editorCode);
    return true;
  };

  function interceptSaveKeydown(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
      saveCommand();
      event.preventDefault();
    }
  }

  const updateListener = (update) => {
    if (update.docChanged) {
      const newSelection = update.state.selection;
      const editor = viewRef.current;
      if (editor) {
        setCursorPosition({
          anchor: newSelection?.ranges[0].anchor,
          head: newSelection?.ranges[0].head
        });
      }
    }
  }

  React.useEffect(() => {
    viewRef.current = new EditorView({
      doc: code,
      extensions: [
        basicSetup,
        [...extensions],
        insertTabAtCoursor,
        EditorState.tabSize.of(2),
        EditorView.lineWrapping,
        keymap.of([indentWithTab]),
        keymap.of(standardKeymap),
        themeConfig.of(clouds),
        EditorView.lineWrapping,
        EditorView.updateListener.of(onEditorChange),
        EditorView.updateListener.of(updateListener),
        EditorView.domEventHandlers({
          keydown: (event) => {
            interceptSaveKeydown(event);
          }
        })
      ],
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
      const currentValue = viewRef.current.state.doc.toString();
      if (currentValue !== code) { // 避免cursor失去焦点
        const viewUpdate = {
          effects: themeConfig.reconfigure(darkMode ? coolGlow : clouds),
          changes: {
            from: 0,
            to: currentValue.length,
            insert: code
          },
        }
        viewRef.current.dispatch(viewUpdate);
      }
    }
  }, [code]);

  return <div ref={elRef} className="h-full"></div>;
}
export default CmEditor;