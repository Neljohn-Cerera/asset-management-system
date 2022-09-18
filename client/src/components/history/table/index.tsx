import React, { useContext } from "react";
import HistoryContext from "../../../context/history/context";
import Table from "../../Table";

const HistoryTableComponent: React.FC = () => {
  const { historyStates, historyArrayStates, handleOpenModal } =
    useContext(HistoryContext);
  return (
    <Table title="History">
      <>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No.</th>
            <th>Item</th>
            <th>Item Code</th>
            <th>Serial Number</th>
            <th>Room</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {historyArrayStates.histories.map((history, index) => (
            <tr key={index}>
              <td>
                <p>{historyStates.page * 5 - 4 + index}</p>
              </td>
              <td>{history.item.name}</td>
              <td>{history.item.code}</td>
              <td>
                {history.item.serialNumber ? history.item.serialNumber : "None"}
              </td>
              <td>{`${history.room.name} ${history.room.no}`}</td>
              <td>
                <button
                  onClick={() => handleOpenModal(history)}
                  style={{ padding: "5px 10px", fontSize: "16px" }}
                >
                  Records
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </>
    </Table>
  );
};

export default HistoryTableComponent;
