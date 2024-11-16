import React from "react";
import { EditorView, keymap, ViewUpdate } from "@codemirror/view";
import { EditorState, Compartment, EditorSelection, Extension } from '@codemirror/state';
import { basicSetup } from "codemirror";
import { coolGlow, clouds } from 'thememirror';
import { standardKeymap, indentWithTab } from '@codemirror/commands';
import useEditorTheme from "@/hooks/useEditorTheme";

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
          range: EditorSelection.cursor(range.from + 1),
        };
      } else {
        return {
          changes: { from: range.from, insert: '\t' },
          range: EditorSelection.cursor(range.from + 1),
        };
      }

    });
    view.dispatch(changes);
    return true;
  },
}]);

interface CMEditorProps {
  code: string
  onChange?: (code: string) => void
  extensions?: Extension[]
}

function CmEditor({ code, onChange, extensions }: CMEditorProps) {

  const elRef = React.useRef<HTMLDivElement>(null);
  const viewRef = React.useRef<EditorView>(null);
  const [, setCursorPosition] = React.useState(null);
  const editorTheme = useEditorTheme();

  function onEditorChange(viewUpdate: ViewUpdate) {
    if (viewUpdate.changes) {
      const newValue = viewUpdate.state.doc.toString();
      onChange(newValue);
    }
  }


  const saveCommand = () => {
    const editorCode = viewRef.current.state.doc.toString();
    onChange?.(editorCode);
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
          head: newSelection?.ranges[0].head,
        });
      }
    }
  };

  React.useEffect(() => {
    const finalExtensions = extensions.filter((item) => {
      return item;
    }) || [];
    viewRef.current = new EditorView({
      doc: code,
      extensions: [
        basicSetup,
        [...finalExtensions],
        EditorState.tabSize.of(2),
        EditorView.lineWrapping,
        keymap.of([indentWithTab]),
        keymap.of(standardKeymap),
        themeConfig.of(editorTheme),
        EditorView.lineWrapping,
        EditorView.updateListener.of(onEditorChange),
        EditorView.updateListener.of(updateListener),
        EditorView.domEventHandlers({
          keydown: (event) => {
            interceptSaveKeydown(event);
          },
        }),
      ],
      parent: elRef.current,
    });
    return () => {
      viewRef.current.destroy();
    };
  }, []);

  React.useEffect(() => {
    viewRef?.current?.dispatch({
      effects: themeConfig.reconfigure(editorTheme),
    });
  }, [editorTheme]);

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
            insert: code,
          },
        };
        viewRef.current.dispatch(viewUpdate);
      }
    }
  }, [code]);

  return <div ref={elRef} className="h-full"></div>;
}
export default CmEditor;