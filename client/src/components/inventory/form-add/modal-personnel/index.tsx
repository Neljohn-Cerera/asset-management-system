import React, { useContext } from "react";
import {
  ModalPersonnelContainer,
  StyledInput,
  ButtonSearch,
  TableContainer,
} from "../../styles";
import InventoryContext from "../../../../context/inventory/context";

const ModalPersonnelComponent: React.FC = () => {
  const {
    inventoryStates,
    inventoryArrayStates,
    handleClickAddInventoryInsertPersonnelClose,
    handleClickSelectPersonnel,
    handleClickPersonnelSearch,
    handleChange,
  } = useContext(InventoryContext);
  return (
    <ModalPersonnelContainer>
      <div>
        <span onClick={(e) => handleClickAddInventoryInsertPersonnelClose(e)}>
          Close
        </span>
        <div>
          <StyledInput
            style={{ width: "80%", margin: 0 }}
            required
            type="text"
            name="personnelSearch"
            placeholder="Search by name | idnumber"
            // onKeyPress={(e) => handleEnterPress(e)}
            onChange={handleChange}
            value={inventoryStates.personnelSearch}
          />
          <ButtonSearch
            disabled={inventoryStates.personnelSearch === "" ? true : false}
            onClick={handleClickPersonnelSearch}
          >
            Personnel search
          </ButtonSearch>
        </div>
        <h4>Personnel result</h4>
        {inventoryArrayStates.personnels.length === 0 ? (
          <p>No data</p>
        ) : (
          <TableContainer>
            <thead>
              <tr>
                <th>No</th>
                <th>Fullname</th>
                <th>ID no.</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {inventoryArrayStates.personnels.map((personnel, index) => (
                <tr key={personnel._id}>
                  <td>{index++}</td>
                  <td>
                    {personnel.firstName} {personnel.lastName}
                  </td>
                  <td>{personnel.idNumber}</td>
                  <td>
                    <p
                      onClick={(e) => handleClickSelectPersonnel(e, personnel)}
                    >
                      Select
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableContainer>
        )}
      </div>
    </ModalPersonnelContainer>
  );
};

export default ModalPersonnelComponent;
