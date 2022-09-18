import { useContext } from "react";
import FormSearchComponent from "./form-search";
import PersonnelFormUpdateComponent from "./form-update";
import PersonnelFormAddComponent from "./form-add";
import TableComponent from "./table";
import PersonnelFormAddAccountComponent from "./form-add-account";
import PersonnelContext from "../../context/personnel/context";
import { ModalContainer } from "../shared/styles";
import { PersonnelContainer } from "./styles";

const PersonnelComponent: React.FC = () => {
  const {
    personnelStates,
    personnelArrayStates,
    handleClickPreviousPage,
    handleClickNextPage,
  } = useContext(PersonnelContext);
  return (
    <PersonnelContainer>
      {personnelStates.error && (
        <p style={{ color: "red", fontSize: "18px" }}>
          {personnelStates.error}
        </p>
      )}
      {/* Form Search Component */}
      <FormSearchComponent />
      {/* Table Component */}
      <TableComponent />
      <div>
        <button
          disabled={personnelStates.page === 1 ? true : false}
          style={{ padding: "10px", fontSize: "16px" }}
          onClick={handleClickPreviousPage}
        >
          Prev
        </button>
        <button
          disabled={personnelArrayStates.personnels?.length! < 5 ? true : false}
          style={{ padding: "10px", fontSize: "16px" }}
          onClick={handleClickNextPage}
        >
          Next
        </button>
      </div>
      {!personnelStates.isModalOpen ? null : (
        <ModalContainer>
          {personnelStates.modalView === "update" ? (
            // Form Personnel Update Component
            <PersonnelFormUpdateComponent />
          ) : personnelStates.modalView === "insert" ? (
            // Form Personnel Add Component
            <PersonnelFormAddComponent />
          ) : personnelStates.modalView === "insertaccount" ? (
            // Form Personnel Add Account Component
            <PersonnelFormAddAccountComponent />
          ) : null}
        </ModalContainer>
      )}
    </PersonnelContainer>
  );
};
export default PersonnelComponent;
