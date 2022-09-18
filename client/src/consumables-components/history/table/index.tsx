import React, { useContext } from "react";
import Table from "../../shared/table";
import HistoryContext from "../../../consumables-context/histories/context";
import PaginationComponent from "../../shared/pagination";

const TableComponent: React.FC = (): JSX.Element => {
  const {
    historyArrayStates,
    historyStates,
    handleClickNextPage,
    handleClickPreviousPage,
  } = useContext(HistoryContext);

  return (
    <>
      <Table title="Stock Out Histories">
        <>
          <thead>
            <tr>
              <th style={{ width: "20px" }}>No.</th>
              <th>Item</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Designation</th>
              <th>Requested By</th>
              <th>Date</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {historyArrayStates.histories.map((history, index) => (
              <tr key={history._id}>
                <td>
                  {" "}
                  <p>{historyStates.page * 5 - 4 + index}</p>
                </td>
                <td>{history.item.name}</td>
                <td>{history.item.description}</td>
                <td>{history.quantity}</td>
                <td>{history.unit}</td>
                <td>{`${history.designation.name} ${history.designation.no}`}</td>
                <td>{`${history.requestdby.firstName} ${history.requestdby.lastName}`}</td>
                <td>{new Date(history.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </>
      </Table>
      <PaginationComponent
        data={historyArrayStates.histories}
        page={historyStates.page}
        handleClickNextPage={handleClickNextPage}
        handleClickPreviousPage={handleClickPreviousPage}
      />
    </>
  );
};

export default TableComponent;
