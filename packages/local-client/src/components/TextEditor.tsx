import MDEditor from "@uiw/react-md-editor";
import { useEffect, useRef, useState } from "react";
import "./TextEditor.css";
import { useDispatch } from "react-redux";
import { Cell, updateCell } from "@/store/slices/cellsSlice";

interface TextEditorProps {
  cell: Cell;
}

const TextEditor = ({ cell }: TextEditorProps) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const editRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        editRef.current &&
        event.target &&
        editRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setEditing(false);
    };
    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  const handleChange = (content: string | undefined) => {
    const payload = {
      content: content || "",
      id: cell.id,
    };
    dispatch(updateCell(payload));
  };

  let content;
  if (editing) {
    content = (
      <div ref={editRef} className="text-editor">
        <MDEditor value={cell.content} onChange={handleChange} />
      </div>
    );
  } else {
    content = (
      <div
        ref={previewRef}
        onClick={() => setEditing(true)}
        className="text-preview-wrapper"
      >
        <div className="card-content">
          <MDEditor.Markdown
            source={cell.content || "Click to edit markdown"}
          />
        </div>
      </div>
    );
  }

  return content;
};

export default TextEditor;
