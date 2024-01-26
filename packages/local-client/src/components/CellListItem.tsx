import { Cell } from "@/store/slices/cellsSlice";
import CodeCell from "./CodeCell";
import TextEditor from "./TextEditor";
import ActionBar from "./ActionBar";
import "./CellListItem.css";
import DiagramEditor from "./DiagramEditor";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem = ({ cell }: CellListItemProps) => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    );
  } else if (cell.type === "markdown") {
    child = (
      <div className="card text-editor-wrapper">
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </div>
    );
  } else {
    child = (
      <div className="card">
        <DiagramEditor cell={cell} />
        <ActionBar id={cell.id} />
      </div>
    );
  }
  return <div className="cell-list-item">{child}</div>;
};

export default CellListItem;
