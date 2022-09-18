import React, { useContext } from "react";
import HistoryContext from "../../../context/history/context";
import { Button } from "../../../styles/componentStyled";
import { ModalContainer } from "../../shared/styles";
import { TableContainer } from "../styles";

const ModalRecordsComponent: React.FC = () => {
  const { historyStates, historyArrayStates, handleCloseModal } =
    useContext(HistoryContext);
  return (
    <ModalContainer>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "80%",
          height: "80%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h4 style={{ fontSize: "20px", textAlign: "center" }}>Asset Records</h4>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "20px",
                textAlign: "left",
                margin: "10px 0",
              }}
            >
              Item : {historyStates.history.item.name}
            </p>

            <div>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "left",
                  margin: "10px 0",
                }}
              >
                Room :{" "}
                {`${historyStates.history.room.name} ${historyStates.history.room.no}`}
              </p>
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "20px",
                textAlign: "left",
                margin: "10px 0",
              }}
            >
              Code : {historyStates.history.item.code}
            </p>
            <p
              style={{
                fontSize: "20px",
                textAlign: "left",
                margin: "10px 0",
              }}
            >
              Serial Number : {historyStates.history.item.serialNumber}
            </p>
          </div>
        </div>

        <TableContainer>
          <thead>
            <tr>
              <th>#</th>
              <th>Personnel</th>
              <th>Year</th>
              <th>Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {historyArrayStates.itemRecords.map((history, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{`${history.personnel.firstName} ${history.personnel.lastName}`}</td>
                <td>{history.year}</td>
                <td>{history.status.name}</td>

                <td>{history.remarks}</td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
        <Button style={{ marginTop: "10px" }} onClick={handleCloseModal}>
          Close
        </Button>
      </div>
    </ModalContainer>
  );
};

export default ModalRecordsComponent;
