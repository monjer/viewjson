import React from "react";
import { EditorView, keymap, ViewUpdate, placeholder } from "@codemirror/view";
import { EditorState, Compartment, EditorSelection, Extension } from '@codemirror/state';
import { basicSetup } from "codemirror";
import { coolGlow, clouds } from 'thememirror';
import { standardKeymap, indentWithTab } from '@codemirror/commands';
import useEditorTheme from "@/hooks/useEditorTheme";
import Dropzone from '@/components/Dropzone';
import { readFileAsText } from "@/utils";
import Toast from "@/components/Toast";
import "./index.scss";

const themeConfig = new Compartment();
const PlaceHolderExtension = placeholder;
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
  extensions?: Extension[],
  placeholder?: string,
  reiszeable?: boolean,
  ref?: React.Ref<{
    scrollIntoView: (line: number) => void;
  }>;
}

function CmEditor(props: CMEditorProps) {
  const { code, onChange, extensions = [], placeholder, ref } = props;
  const elRef = React.useRef<HTMLDivElement>(null);
  const viewRef = React.useRef<EditorView>(null);
  const [, setCursorPosition] = React.useState(null);
  const editorTheme = useEditorTheme();

  function onEditorChange(viewUpdate: ViewUpdate) {
    onChange?.(viewUpdate.state.doc.toString());
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

  const onLoadFile = async (file) => {
    try {
      const fileContent = await readFileAsText(file);
      console.log(fileContent);
      onChange(fileContent);
    } catch (error) {
      Toast.error('Please upload a json file');
    }
  };

  React.useImperativeHandle(ref, () => {
    return {
      scrollIntoView(line) {
        viewRef.current.dispatch({
          selection: EditorSelection.cursor(line),
          effects: EditorView.scrollIntoView(line, { y: 'center' }),
        });
      },
    };
  }, []);


  React.useEffect(() => {
    const finalExtensions = extensions.filter((item) => { return item; }) || [];
    viewRef.current = new EditorView({
      doc: code,
      extensions: [
        basicSetup,
        PlaceHolderExtension(placeholder),
        [...finalExtensions],
        EditorState.tabSize.of(2),
        EditorView.lineWrapping,
        keymap.of([indentWithTab]),
        keymap.of(standardKeymap),
        themeConfig.of(editorTheme),
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

  React.useLayoutEffect(() => {
    if (viewRef.current) {
      const darkMode = document.documentElement.classList.contains('dark');
      const currentValue = viewRef.current.state.doc.toString();
      if (currentValue !== code) { // 避免cursor失去焦点
        const viewUpdate = {
          effects: themeConfig.reconfigure(darkMode ? coolGlow : clouds),
          changes: {
            from: 0,
            to: viewRef.current.state.doc.length,
            insert: "",
          },
        };
        console.log('viewUpdate', code);
        viewRef.current.dispatch(viewUpdate);
      }
    }
  }, [code]);

  return (
    <Dropzone onChange={acceptedFiles => onLoadFile(acceptedFiles[0])}>
      <div ref={elRef} className={`h-full`}></div>
    </Dropzone >
  );

}
export default CmEditor;