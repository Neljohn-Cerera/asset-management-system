import { useContext } from "react";
import HistoryContext from "../../context/history/context";
import { HistoryContainer } from "./styles";
import FormSearchComponent from "./form-search";
import ModalRecordsComponent from "./modal-records";
import HistoryTableComponent from "./table";

const HistoryComponent: React.FC = () => {
  const {
    historyStates,
    historyArrayStates,
    handleClickPreviousPage,
    handleClickNextPage,
  } = useContext(HistoryContext);
  return (
    <HistoryContainer style={{ padding: "0 20px" }}>
      {/* Form Search */}
      <FormSearchComponent />
      {/* Table Component */}
      <HistoryTableComponent />
      <div>
        <button
          disabled={historyStates.page === 1 ? true : false}
          style={{ padding: "10px", fontSize: "16px" }}
          onClick={handleClickPreviousPage}
        >
          Prev
        </button>
        <button
          disabled={historyArrayStates.histories?.length! < 5 ? true : false}
          style={{ padding: "10px", fontSize: "16px" }}
          onClick={handleClickNextPage}
        >
          Next
        </button>
      </div>
      {/* Modal History Records Component */}
      {historyStates.openModal ? <ModalRecordsComponent /> : null}
    </HistoryContainer>
  );
};

export default HistoryComponent;
