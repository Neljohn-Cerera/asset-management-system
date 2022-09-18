import React, { useContext } from "react";
import {
  ModalPersonnelContainer,
  StyledInput,
  ButtonSearch,
  TableContainer,
} from "../../styles";
import InventoryContext from "../../../../context/inventory/context";

const ModalItemComponent: React.FC = () => {
  const {
    inventoryStates,
    inventoryArrayStates,
    handleClickAddInventoryInsertItemClose,
    handleClickSelectAsset,
    handleClickItemSearch,
    handleChange,
  } = useContext(InventoryContext);
  return (
    <ModalPersonnelContainer>
      <div>
        <span onClick={(e) => handleClickAddInventoryInsertItemClose(e)}>
          Close
        </span>
        <div>
          <StyledInput
            style={{ width: "80%", margin: 0 }}
            required
            type="text"
            name="itemSearch"
            placeholder="Search by name | code | serialnumber"
            // onKeyPress={(e) => handleEnterPress(e)}
            onChange={handleChange}
            value={inventoryStates.itemSearch}
          />
          <ButtonSearch
            disabled={inventoryStates.itemSearch === "" ? true : false}
            onClick={handleClickItemSearch}
          >
            Item search
          </ButtonSearch>
        </div>
        <h4>
          Item result :{" "}
          {inventoryArrayStates.items ? inventoryArrayStates.items.length : 0}
        </h4>

        {inventoryArrayStates.items.length === 0 ? (
          <p>No data</p>
        ) : (
          <>
            <TableContainer>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Item</th>
                  <th>Code</th>
                  <th>Serial no.</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody style={{ maxHeight: "100px", overflowY: "scroll" }}>
                {inventoryArrayStates.items.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index++}</td>
                    <td>{item.name}</td>
                    <td>{item.code}</td>
                    <td>{item.serialNumber}</td>
                    <td>
                      <p onClick={(e) => handleClickSelectAsset(e, item)}>
                        Select
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableContainer>
          </>
        )}
      </div>
    </ModalPersonnelContainer>
  );
};

export default ModalItemComponent;
