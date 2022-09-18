import { useContext } from "react";
import AccountContext from "../../context/account/context";
import { AccountContainer } from "./styles";
import { ModalContainer } from "../shared/styles";
import FormSearchComponent from "./form-search";
import AccountFormUpdateComponent from "./form-update";
import TableComponent from "./table";

const AccountComponent: React.FC = () => {
  const {
    accountStates,
    accountArrayStates,
    handleClickPreviousPage,
    handleClickNextPage,
  } = useContext(AccountContext);

  return (
    <AccountContainer>
      {accountStates.error ? (
        <p style={{ color: "red", fontSize: "18px" }}>{accountStates.error}</p>
      ) : null}
      {/* Form Search Component */}
      <FormSearchComponent />
      {/* Table Component */}
      <TableComponent />
      <div>
        <button
          disabled={accountStates.page === 1 ? true : false}
          style={{ padding: "10px", fontSize: "16px" }}
          onClick={handleClickPreviousPage}
        >
          Prev
        </button>
        <button
          disabled={accountArrayStates.personnels?.length! < 5 ? true : false}
          style={{ padding: "10px", fontSize: "16px" }}
          onClick={handleClickNextPage}
        >
          Next
        </button>
      </div>
      {/* Modal Component */}
      {!accountStates.isModalOpen ? null : (
        <ModalContainer>
          {/* Form Update Component */}
          <AccountFormUpdateComponent />
        </ModalContainer>
      )}
    </AccountContainer>
  );
};

export default AccountComponent;
