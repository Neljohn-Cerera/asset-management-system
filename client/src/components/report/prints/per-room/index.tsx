import React, { useContext } from "react";
import {
  Container,
  ContainerNames,
  Header,
  HeaderText,
  Table,
  TableTD,
  TableTH,
  TableTR,
} from "./styled";
import ReportContext from "../../../../context/report/context";

const PrintPerRoom: React.FC = () => {
  const { reportArrayStates } = useContext(ReportContext);
  return (
    <>
      <Container>
        {/* Header */}
        <Header>
          <HeaderText>
            Room # : <span>{reportArrayStates.roomReport.room}</span>
          </HeaderText>
          <HeaderText>
            Personnel : <span>{reportArrayStates.roomReport.personnel}</span>
          </HeaderText>
          <HeaderText>
            SY : <span>{reportArrayStates?.roomReport?.year}</span>
          </HeaderText>
        </Header>

        {/* Table */}
        <Table>
          <thead>
            <TableTR>
              <TableTH>#</TableTH>
              <TableTH>Asset</TableTH>
              <TableTH>Code</TableTH>
              <TableTH>Status</TableTH>
              <TableTH>Year end Status</TableTH>
            </TableTR>
          </thead>
          <tbody>
            {reportArrayStates.roomReport?.assets?.map((asset, index) => (
              <TableTR key={index}>
                <TableTD>{index + 1}</TableTD>
                <TableTD>{asset.item.name}</TableTD>
                <TableTD>{asset.item.code}</TableTD>
                <TableTD>{asset.status.name}</TableTD>
                <TableTD></TableTD>
              </TableTR>
            ))}
          </tbody>
        </Table>
        <ContainerNames>
          <div>
            <hr />
            <p>Prepared by</p>
          </div>
          <div>
            <hr />
            <p>Checked by</p>
          </div>
          <div>
            <hr />
            <p>Noted by</p>
          </div>
        </ContainerNames>
      </Container>
    </>
  );
};

export default PrintPerRoom;
