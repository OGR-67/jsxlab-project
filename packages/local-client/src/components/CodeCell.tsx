import { useCallback, useEffect, useRef } from "react";
import CodeEditor from "./CodeEditor";
import Preview from "./Preview";
import Resizable from "./Resizable";
import { Cell, updateCell } from "@/store/slices/cellsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState, createBundle } from "@/store";
import { useSelector } from "react-redux";
import "./CodeCell.css";
import { useCumulativeCode } from "@/hooks/useCumulativeCode";

const CODE_EXCECUTION_DELAY = 500;

interface CodeCellProps {
  cell: Cell;
}

function CodeCell({ cell }: CodeCellProps) {
  // Used in the useEffect to create the bundle right when the component is
  // rendered and not wait for the debouncing time
  const isFirstRun = useRef(true);

  const dispatch: AppDispatch = useDispatch();

  const bundle = useSelector((state: RootState) => state.bundles[cell.id]);

  const cumulativeCode = useCumulativeCode(cell.id);
  const prevContentRef = useRef(cumulativeCode);

  // Helper function to dispatch createBundle action.
  const dispatchCreateBundle = useCallback(
    (cellId: string, rawCode: string) => {
      dispatch(
        createBundle({
          cellId,
          rawCode,
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      dispatchCreateBundle(cell.id, cumulativeCode);
      return;
    }
    // Debouncing
    if (prevContentRef.current !== cumulativeCode) {
      const timer = setTimeout(async () => {
        dispatchCreateBundle(cell.id, cumulativeCode);
      }, CODE_EXCECUTION_DELAY);
      return () => clearTimeout(timer);
    }
  }, [cell.id, cumulativeCode, dispatchCreateBundle]);

  const loadingContent = (
    <div className="progress-cover">
      <progress className="progress is-small is-primary" max="100">
        Loading
      </progress>
    </div>
  );

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: "calc(100% - 10px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(content) =>
              dispatch(updateCell({ id: cell.id, content }))
            }
          />
        </Resizable>
        <div className="progress-wrapper">
          {!bundle || bundle.loading ? (
            loadingContent
          ) : (
            <Preview code={bundle.code} error={bundle.err} />
          )}
        </div>
      </div>
    </Resizable>
  );
}

export default CodeCell;
