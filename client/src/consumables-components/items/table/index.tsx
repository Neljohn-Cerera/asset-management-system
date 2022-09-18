import React, { useContext } from "react";
import Table from "../../shared/table";
import * as FaIcons from "react-icons/fa";
import ConsumablesItemsContext from "../../../consumables-context/items/context";
import PaginationComponent from "../../shared/pagination";

const TableComponent: React.FC = (): JSX.Element => {
  const {
    consumablesItemsArrayStates,
    consumablesItemsStates,
    handleClickOpenModal,
    handleClickUpdateItemConsumables,
    handleClickNextPage,
    handleClickPreviousPage,
    handleClickDeleteConsumable,
  } = useContext(ConsumablesItemsContext);
  return (
    <>
      <Table title="Items" buttonText="items" handleNew={handleClickOpenModal}>
        <>
          <thead>
            <tr>
              <th style={{ width: "20px" }}>No.</th>
              <th>Item</th>
              <th>Description</th>
              <th>Unit</th>
              <th>Restock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {consumablesItemsArrayStates.items.map((item, index) => (
              <tr key={item._id}>
                <td>
                  {" "}
                  <p>{consumablesItemsStates.page * 5 - 4 + index}</p>
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.unit.name}</td>
                <td>{item.restock}</td>
                <td>
                  <div style={{ justifyContent: "center" }}>
                    <button
                      onClick={() => handleClickUpdateItemConsumables(item)}
                    >
                      <FaIcons.FaPenSquare size={18} color="blue" />
                    </button>
                    <button>
                      <FaIcons.FaTrash
                        onClick={() =>
                          handleClickDeleteConsumable(item._id as string)
                        }
                        size={18}
                        color="red"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </>
      </Table>
      <PaginationComponent
        data={consumablesItemsArrayStates.items}
        page={consumablesItemsStates.page}
        handleClickNextPage={handleClickNextPage}
        handleClickPreviousPage={handleClickPreviousPage}
      />
    </>
  );
};

export default TableComponent;
