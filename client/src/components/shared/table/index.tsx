import React from "react";
import { Table } from "./styles";

type Props = {
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
};

const CTable: React.FC<Props> = (props): JSX.Element => {
  return (
    <Table mt={props.mt} mr={props.mr} mb={props.mb} ml={props.ml}>
      {props.children}
    </Table>
  );
};

export default CTable;
