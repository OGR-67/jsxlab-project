import { Cell, updateCell } from "@/store/slices/cellsSlice";
import { useState } from "react";
import { DrawIoEmbed } from "react-drawio";
import { useDispatch } from "react-redux";
import "./DiagramEditor.css";

interface DiagramEditorProps {
  cell: Cell;
}

const DiagramEditor = ({ cell }: DiagramEditorProps) => {
  const dispatch = useDispatch();
  const [editingMode, setEditingMode] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const editor = (
    <DrawIoEmbed
      xml={cell.content || ""}
      urlParameters={{
        ui: "min",
        spin: true,
        noSaveBtn: true,
        saveAndExit: true,
      }}
      onSave={(event) =>
        dispatch(
          updateCell({
            id: cell.id,
            content: event.xml,
          }),
        )
      }
      onClose={() => setEditingMode(false)}
      onLoad={() => setIsLoading(false)}
    />
  );

  const editorContent = (
    <div className="diagram-editor-wrapper">
      {editor}
      <div className={`editor-loader ${isloading ? "" : "is-hidden"}`}>
        <progress className="progress is-primary">Loading...</progress>
      </div>
    </div>
  );

  return (
    <div className="diagram-editor">
      {editingMode ? (
        editorContent
      ) : (
        <div
          className="diagram-preview-wrapper"
          onClick={() => {
            setIsLoading(true);
            setEditingMode(true);
          }}
        >
          {cell.content !== "" ? (
            <img className="card-content" src={cell.content} alt="Diagram" />
          ) : (
            <p className="card-content diagram-placeholder">
              Click to edit diagram
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default DiagramEditor;
