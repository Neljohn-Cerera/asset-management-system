import React, { useContext } from "react";
import StockReportsContext from "../../../../consumables-context/reports/context";
import {
  Container,
  Header,
  HeaderText,
  Table,
  TableTR,
  TableTH,
  TableTD,
} from "./styles";

const PrintStockOutComponent: React.FC = (): JSX.Element => {
  const { stockReportsArrayStates } = useContext(StockReportsContext);
  return (
    <Container>
      {/* Header */}
      <Header>
        <HeaderText>Consumables Reports</HeaderText>
        <HeaderText>Stocks Out</HeaderText>
        <HeaderText>Year : 2022</HeaderText>
      </Header>
      {/* Table */}
      <Table>
        <thead>
          <TableTR>
            <TableTH>#</TableTH>
            <TableTH>Item</TableTH>
            <TableTH>Description</TableTH>
            <TableTH>Unit</TableTH>
            <TableTH>Quantity</TableTH>
          </TableTR>
        </thead>
        <tbody>
          {stockReportsArrayStates.stockOutReports.map((stock, index) => (
            <TableTR key={index}>
              <TableTD>{index + 1}</TableTD>
              <TableTD>{stock.item}</TableTD>
              <TableTD>{stock.description}</TableTD>
              <TableTD>{stock.unit}</TableTD>
              <TableTD>{stock.quantity}</TableTD>
            </TableTR>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PrintStockOutComponent;
