import React, { useContext } from "react";
import Table from "../../shared/table";
import StocksContext from "../../../consumables-context/stocks/context";
import PaginationComponent from "../../shared/pagination";

const TableComponent: React.FC = (): JSX.Element => {
  const {
    handleClickAddNewStocks,
    handleClickStockOut,
    stocksArrayStates,
    stocksStates,
    handleClickNextPage,
    handleClickPreviousPage,
  } = useContext(StocksContext);

  return (
    <>
      <Table
        title="Stocks Available"
        buttonText="Stocks"
        handleNew={handleClickAddNewStocks}
      >
        <>
          <thead>
            <tr>
              <th style={{ width: "20px" }}>No.</th>
              <th>Item</th>
              <th>Description</th>
              <th>Unit</th>
              <th>Quantity</th>
              <th>Restock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stocksArrayStates.itemConsumablesStocks.map((stock, index) => (
              <tr key={index}>
                <td>
                  <p>{stocksStates.page * 5 - 4 + index}</p>
                </td>
                <td>{stock.item}</td>
                <td>{stock.description}</td>
                <td>{stock.unit}</td>
                <td>{stock.quantity}</td>
                <td
                  style={{
                    backgroundColor: `${
                      stock.quantity <= (stock.restock as number) && "red"
                    }`,
                  }}
                >
                  {""}
                </td>
                <td>
                  <div style={{ justifyContent: "center" }}>
                    <button onClick={(e) => handleClickStockOut(e, stock)}>
                      <span> Stock Out</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </>
      </Table>
      <PaginationComponent
        data={stocksArrayStates.itemConsumablesStocks}
        page={stocksStates.page}
        handleClickNextPage={handleClickNextPage}
        handleClickPreviousPage={handleClickPreviousPage}
      />
    </>
  );
};

export default TableComponent;
