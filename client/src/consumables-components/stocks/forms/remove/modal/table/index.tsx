import React, { useContext } from "react";
import StocksContext from "../../../../../../consumables-context/stocks/context";
import { TableWrapper } from "../../../../styles";

const TableComponent: React.FC = (): JSX.Element => {
  const { stocksStates, stocksArrayStates, handleSelectPersonnel } =
    useContext(StocksContext);

  return (
    <TableWrapper>
      <thead>
        <tr>
          <th style={{ width: "20px" }}>No.</th>
          <th>Name</th>
          <th>ID Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {stocksArrayStates.personnels.map((personnel, index) => (
          <tr key={personnel._id}>
            <td>
              <p>{stocksStates.page * 5 - 4 + index}</p>
            </td>
            <td>{`${personnel.firstName} ${personnel.lastName}`}</td>
            <td>{personnel.idNumber}</td>
            <td>
              <p onClick={(e) => handleSelectPersonnel(e, personnel)}>Select</p>
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default TableComponent;
