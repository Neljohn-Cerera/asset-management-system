import React, { useContext } from "react";
import StocksContext from "../../../../../../consumables-context/stocks/context";
import { TableWrapper } from "../../../../styles";

const TableComponent: React.FC = (): JSX.Element => {
  const { stocksStates, stocksArrayStates, handleSelectItem } =
    useContext(StocksContext);

  return (
    <TableWrapper>
      <thead>
        <tr>
          <th style={{ width: "20px" }}>No.</th>
          <th>Item</th>
          <th>Description</th>
          <th>Unit</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {stocksArrayStates.itemConsumables.map((item, index) => (
          <tr key={item._id}>
            <td>
              <p>{stocksStates.page * 5 - 4 + index}</p>
            </td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.unit.name}</td>
            <td>
              <p onClick={(e) => handleSelectItem(e, item)}>Select</p>
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default TableComponent;
