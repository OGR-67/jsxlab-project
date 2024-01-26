import { useDispatch } from "react-redux";
import "./AddCell.css";
import { insertCellAfter } from "@/store";
import { GoPlusCircle } from "react-icons/go";

interface AddCellProps {
	previousCellId: string | null;
	forceVisible?: boolean;
}

const AddCell = ({ previousCellId, forceVisible }: AddCellProps) => {
	const dispatch = useDispatch();
	return (
		<div className={`add-cell ${forceVisible && "force-visible"} `}>
			<div className={"add-buttons"}>
				<button
					type="button"
					onClick={() => {
						dispatch(insertCellAfter({ id: previousCellId, type: "code" }));
					}}
					className="button is-small is-rounded"
				>
					<span className="icon">
						<GoPlusCircle />
					</span>
					<span>CODE</span>
				</button>
				<button
					type="button"
					onClick={() => {
						dispatch(insertCellAfter({ id: previousCellId, type: "markdown" }));
					}}
					className="button is-small is-rounded"
				>
					<span className="icon">
						<GoPlusCircle />
					</span>
					<span>MARKDOWN</span>
				</button>
				<button
					type="button"
					onClick={() => {
						dispatch(insertCellAfter({ id: previousCellId, type: "diagram" }));
					}}
					className="button is-small is-rounded"
				>
					<span className="icon">
						<GoPlusCircle />
					</span>
					<span>DIAGRAM</span>
				</button>
			</div>
			<div className="divider" />
		</div>
	);
};

export default AddCell;
