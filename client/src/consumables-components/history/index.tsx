import React from "react";
import FormSearchComponent from "./forms/search";
import { StocksHistoryContainer } from "./styles";
import TableComponent from "./table";

const HistoryComponent: React.FC = (): JSX.Element => {
  return (
    <StocksHistoryContainer>
      <FormSearchComponent />
      <TableComponent />
    </StocksHistoryContainer>
  );
};

export default HistoryComponent;
