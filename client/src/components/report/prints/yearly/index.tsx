import React, { useContext } from "react";
import {
  Container,
  Footer,
  Header,
  HeaderText,
  Table,
  TableTD,
  TableTH,
  TableTR,
} from "./styled";
import ReportContext from "../../../../context/report/context";

const PrintYearly: React.FC = () => {
  const { reportArrayStates, reportStates } = useContext(ReportContext);
  var yearRows: string[] = [];
  var fiveYears: number[] = [];
  let start = reportStates?.startYear!;
  let end = reportStates?.endYear!;
  for (start; start <= end; start++) {
    yearRows.push(`${start}-${parseInt(start.toString()) + 1}`);
    fiveYears.push(parseInt(start.toString()));
  }

  return (
    <>
      {reportArrayStates.yearlyReports?.data?.map((yearReport, index) => (
        <Container key={index}>
          {/* Header */}
          <Header>
            <HeaderText>
              Room # : <span>{`${yearReport.room.name}`}</span>
            </HeaderText>
            <HeaderText>
              Personnel : <span>{yearReport.room.personnel}</span>
            </HeaderText>
            <HeaderText>
              Year : <span>{reportArrayStates.yearlyReports?.year}</span>
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
                {/* <TableTH>Remarks</TableTH> */}
              </TableTR>
            </thead>
            <tbody>
              {yearReport.room?.assets?.map((asset, index) => (
                <TableTR key={index}>
                  <TableTD>{index + 1}</TableTD>
                  <TableTD>{asset.item.name}</TableTD>
                  <TableTD>{asset.item.code}</TableTD>
                  <TableTD>{asset.status.name}</TableTD>
                  {/* <TableTD>{asset.item.remarks}</TableTD> */}
                </TableTR>
              ))}
            </tbody>
          </Table>

          {/* Footer */}
          <Footer>
            <h3>Summary</h3>
            <div>
              {/* {fiveYearsReport.room.} */}
              {yearReport?.room.assetsCount?.map((asset, index) => (
                <div key={index}>
                  <p>
                    {asset.status}
                    <span>{asset.count}</span>
                  </p>
                </div>
              ))}
            </div>
          </Footer>
        </Container>
      ))}
    </>
  );
};

export default PrintYearly;
