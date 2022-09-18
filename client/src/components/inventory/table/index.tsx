import React, { useContext } from "react";
import Table from "../../Table";
import InventoryContext from "../../../context/inventory/context";

const InventoryTableComponent: React.FC = () => {
  const { inventoryStates, inventoryArrayStates, handleClickAddInventory } =
    useContext(InventoryContext);

  return (
    <Table
      title="Inventory"
      buttonText="Inventory"
      handleNew={handleClickAddInventory}
    >
      <>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No.</th>
            <th>Item</th>
            <th>Item Code</th>
            <th>Serial Number</th>
            <th>Room</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {inventoryArrayStates.histories.length === 0 ? (
            <tr>
              <td>No data</td>
            </tr>
          ) : (
            inventoryArrayStates.histories.map((history, index) => (
              <tr key={index}>
                <td>
                  <p>{inventoryStates.page * 5 - 4 + index}</p>
                </td>
                <td>{history.item?.name}</td>
                <td>{history.item?.code}</td>
                <td>
                  {history.item.serialNumber
                    ? history.item.serialNumber
                    : "None"}
                </td>

                <td>{`${history.room.name} ${history.room.no}`}</td>
                <td>{history.year}</td>
              </tr>
            ))
          )}
        </tbody>
      </>
    </Table>
  );
};

export default InventoryTableComponent;
