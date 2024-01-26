import { format } from "@/formatters/formatter";
import MonacoEditor from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useEffect, useRef } from "react";
import "./CodeEditor.css";

interface CodeEditorProps {
	initialValue: string;
	onChange(value: string): void;
	onHeightChange?(height: number): void;
}

interface IEditor {
	getValue(): string;
	setValue(newValue: string): void;
	getModel?(): {
		getLineCount(): number;
	};
}

const lineHeight = 22.2;

const CodeEditor = ({
	initialValue,
	onChange,
	onHeightChange,
}: CodeEditorProps) => {
	const editorRef = useRef<IEditor>();

	useEffect(() => {
		if (onHeightChange) {
			if (!editorRef.current || !editorRef.current.getModel) return;
			onHeightChange(
				(editorRef.current.getModel().getLineCount() * lineHeight ||
					lineHeight * 5) +
					lineHeight +
					10,
			);
		}
	});

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
				onMount={handleMount as (editor: editor.IStandaloneCodeEditor) => void}
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
