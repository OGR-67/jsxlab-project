import { Fragment, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import AddCell from "./AddCell";
import CellListItem from "./CellListItem";
import "./CellList.css";
import { RootState } from "@/store";
import { useCreateCellsMutation, useGetCellsQuery } from "@/store";
import { ImSpinner3 } from "react-icons/im";
import { FaRegSave } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { useDispatch } from "react-redux";
import { dataSaved } from "@/store";

const CellList = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useGetCellsQuery(null);
  const [createCells, { isError, isLoading: isSaving, isSuccess }] =
    useCreateCellsMutation();
  const { order, data, dataChanged } = useSelector(
    (state: RootState) => state.cells,
  );
  const isSuccessPrevious = useRef(isSuccess);

  useEffect(() => {
    // Set 'dataChanged' to false when the data is saved
    if (!isSuccessPrevious.current && isSuccess) dispatch(dataSaved());
    isSuccessPrevious.current = isSuccess;

    // Preventing the user from closing the window if there are unsaved changes
    const hangleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (dataChanged) e.preventDefault();
    };
    window.addEventListener("beforeunload", hangleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", hangleBeforeUnload);
    };
  }, [isSuccess, dispatch, dataChanged]);

  // Fetching data from the server
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error...</div>;

  const handleSave = async () => {
    const cellsList = order.map((id) => data[id]);
    createCells({ cells: cellsList });
  };

  // Rendering the cells
  const cells = order.map((id) => data[id]);
  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  // Rendering the save button
  const saveButtonText = isSaving ? (
    <ImSpinner3 className="spin" />
  ) : isError ? (
    <MdError />
  ) : (
    <FaRegSave />
  );

  return (
    <div className="cell-list">
      <div className="cell-list-title-wrapper">
        <h1 className="title is-1 has-text-centered">JSXLab</h1>
        <button
          type="button"
          className={`button is-small button-save is-outlined is-rounded ${
            !dataChanged ? "is-hidden" : isError ? "is-danger" : "is-primary"
          }`}
          onClick={handleSave}
        >
          {saveButtonText}
        </button>
      </div>
      <AddCell forceVisible={!renderedCells.length} previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
