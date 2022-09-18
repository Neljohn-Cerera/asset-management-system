import React, { useContext } from "react";
import DashboardContext from "../../../../../consumables-context/dashboard/context";
import { TableContainer, Title, Table } from "../../../styles";

const TableComponent: React.FC = (): JSX.Element => {
  const { dashboardArrayStates, dashboardStates } =
    useContext(DashboardContext);
  return (
    <TableContainer>
      <Title>
        {dashboardArrayStates.pieChartStockin.length === 0
          ? "No Stocks for "
          : "Stocks Available"}
        ( {dashboardStates.settingsYear} )
      </Title>
      <div
        style={{
          display: "inline-block",
          height: "80%",
          overflow: "auto",
          position: "relative",
          paddingRight: "10px",
        }}
      >
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th style={{ textAlign: "center" }}>Qty.</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dashboardArrayStates.pieChartStockin?.map((data, index) => (
              <tr key={index}>
                <td>{`${data.item} ${data.description}`}</td>
                <td style={{ textAlign: "center" }}>{data.quantity}</td>
                <td>
                  <p
                    style={{
                      width: "30px",
                      backgroundColor: `${data.color}`,
                      color: `${data.color}`,
                    }}
                  >
                    color
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </TableContainer>
  );
};

export default TableComponent;
