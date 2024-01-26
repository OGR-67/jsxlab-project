import MonacoEditor from "@monaco-editor/react";
import { useRef } from "react";
import { format } from "@/formatters/formatter";
import "./CodeEditor.css";

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

interface IEditor {
  getValue(): string;
  setValue(newValue: string): void;
}

const CodeEditor = ({ initialValue, onChange }: CodeEditorProps) => {
  const editorRef = useRef<IEditor>();

  const handleMount = (editor: IEditor) => {
    editorRef.current = editor;
    onChange(editor.getValue());
  };

  const handleChange = (value: string | undefined) => {
    onChange(value || "");
  };

  const handleFormatClick = async () => {
    if (editorRef.current) {
      const unformated = editorRef.current.getValue();

      const formated = await format(unformated);

      editorRef.current.setValue(formated);
    }
  };

  return (
    <div className="editor-wrapper">
      <button
        type="button"
        onClick={handleFormatClick}
        className="button button-format is-primary is-small"
      >
        Format
      </button>
      <MonacoEditor
        onMount={handleMount}
        onChange={handleChange}
        language="javascript"
        value={initialValue}
        height="100%"
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          wordWrap: "on",
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
        }}
      />
    </div>
  );
};

export default CodeEditor;
