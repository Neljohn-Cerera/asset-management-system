import React from "react";
import { Header, TableContainer, TableWrapper } from "./styles";
import * as FaIcons from "react-icons/fa";

interface TableProps {
  title: string;
  buttonText?: string;
  handleNew?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: JSX.Element;
}

const Table: React.FC<TableProps> = ({
  title,
  buttonText,
  handleNew,
  children,
}) => {
  return (
    <TableContainer>
      <Header>
        <h2>{title}</h2>
        {buttonText ? (
          <button onClick={handleNew}>
            <FaIcons.FaPlus size={16} />

            <p>Add New {buttonText}</p>
          </button>
        ) : null}
      </Header>
      <TableWrapper>{children}</TableWrapper>
    </TableContainer>
  );
};
export default Table;
