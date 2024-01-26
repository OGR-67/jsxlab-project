import { useCumulativeCode } from "@/hooks/useCumulativeCode";
import { AppDispatch, RootState, createBundle } from "@/store";
import { Cell, updateCell } from "@/store/slices/cellsSlice";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./CodeCell.css";
import CodeEditor from "./CodeEditor";
import Preview from "./Preview";
import Resizable from "./Resizable";

const CODE_EXCECUTION_DELAY = 500;
const lineHeight = 19;

interface CodeCellProps {
	cell: Cell;
}

function CodeCell({ cell }: CodeCellProps) {
	// Used in the useEffect to create the bundle right when the component is
	// rendered and not wait for the debouncing time
	const isFirstRun = useRef(true);

	const [height, setHeight] = useState(lineHeight + 50);

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

	const handleHeightChange = (height: number) => {
		setHeight(height);
	};

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
		<Resizable direction="vertical" height={height}>
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
						onHeightChange={handleHeightChange}
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
