import { deleteCell, moveCell } from "@/store";
import { GoChevronDown, GoChevronUp, GoTrash } from "react-icons/go";
import { useDispatch } from "react-redux";
import "./ActionBar.css";

interface ActionBarProps {
  id: string;
}

const ActionBar = ({ id }: ActionBarProps) => {
  const dispatch = useDispatch();
  return (
    <div className="action-bar">
      <div className="has-tooltip">
        <span className="tooltip-text">Move Cell Up</span>
        <button
          type="button"
          onClick={() => dispatch(moveCell({ id, direction: "up" }))}
          className="button is-primary is-small"
        >
          <GoChevronUp />
        </button>
      </div>
      <div className="has-tooltip">
        <span className="tooltip-text">Move Cell Down</span>
        <button
          type="button"
          onClick={() => dispatch(moveCell({ id, direction: "down" }))}
          className="button is-primary is-small"
        >
          <GoChevronDown />
        </button>
      </div>
      <div className="has-tooltip">
        <span className="tooltip-text">Delete Cell</span>
        <button
          type="button"
          onClick={() => dispatch(deleteCell(id))}
          className="button is-primary is-small"
        >
          <GoTrash />
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
