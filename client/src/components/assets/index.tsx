import { useContext } from "react";
import AssetContext from "../../context/asset/context";
import { AssetContainer } from "./styles";
import AssetFormAddComponent from "./form-add";
import FormSearchComponent from "./form-search";
import AssetFormUpdateComponent from "./form-update";
import AssetTableComponent from "./table";
import { ModalContainer } from "../shared/styles";

const AssetComponent: React.FC = (): JSX.Element => {
  const {
    assetStates,
    assetArrayStates,
    handleClickPreviousPage,
    handleClickNextPage,
  } = useContext(AssetContext);
  return (
    <AssetContainer>
      {assetStates.error ? (
        <p style={{ color: "red", fontSize: "18px" }}>{assetStates.error}</p>
      ) : null}
      {/* Form Search Component */}
      <FormSearchComponent />
      {/* Table Component */}
      <AssetTableComponent />
      <div>
        <button
          disabled={assetStates.page === 1 ? true : false}
          style={{ padding: "10px", fontSize: "16px" }}
          onClick={handleClickPreviousPage}
        >
          Prev
        </button>
        <button
          disabled={assetArrayStates.assets?.length! < 5 ? true : false}
          style={{ padding: "10px", fontSize: "16px" }}
          onClick={handleClickNextPage}
        >
          Next
        </button>
      </div>
      {!assetStates.isModalOpen ? null : (
        <ModalContainer>
          {assetStates.modalView === "insert" ? (
            // Form Asset Add Component
            <AssetFormAddComponent />
          ) : assetStates.modalView === "update" ? (
            // Form Asset Add Component
            <AssetFormUpdateComponent />
          ) : null}
        </ModalContainer>
      )}
    </AssetContainer>
  );
};

export default AssetComponent;
