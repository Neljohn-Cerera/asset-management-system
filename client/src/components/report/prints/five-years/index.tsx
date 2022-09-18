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
const PrintFiveYearsReports: React.FC = () => {
  const { reportStates, reportArrayStates } = useContext(ReportContext);
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
      {reportArrayStates.fiveYearsReports.map((fiveYearsReport, index) => (
        <Container key={index}>
          {/* Header */}
          <Header>
            <HeaderText>
              Room # : <span>{`${fiveYearsReport.room.name}`}</span>
            </HeaderText>
            <HeaderText>
              Personnel : <span>{fiveYearsReport.room.personnel}</span>
            </HeaderText>
            <HeaderText>
              School Year : <span>{fiveYearsReport.room.schoolYear}</span>
            </HeaderText>
          </Header>
          {/* Table */}
          <Table>
            <thead>
              <TableTR>
                <TableTH>#</TableTH>
                <TableTH>Asset</TableTH>
                <TableTH>Code</TableTH>
                {yearRows?.map((year, index) => (
                  <TableTH key={index}>{year}</TableTH>
                ))}
              </TableTR>
            </thead>
            <tbody>
              {fiveYearsReport.room.assets.map((asset, index) => (
                <TableTR key={index}>
                  <TableTD>{index + 1}</TableTD>
                  <TableTD>{asset._id.name}</TableTD>
                  <TableTD>{asset._id.code}</TableTD>
                  <TableTD>
                    {asset.status.map((stat) => {
                      return fiveYears[0] === stat.year && stat.status;
                    })}
                  </TableTD>
                  {/* {fiveYears.map((year, index) => (
                        <TableTD key={index}>
                          {asset.status.map((stat) => {
                            return year === stat.year && stat.status;
                          })}
                        </TableTD>
                      ))} */}
                  <TableTD>
                    {asset.status.map((stat) => {
                      return fiveYears[1] === stat.year && stat.status;
                    })}
                  </TableTD>
                  <TableTD>
                    {asset.status.map((stat) => {
                      return fiveYears[2] === stat.year && stat.status;
                    })}
                  </TableTD>
                  <TableTD>
                    {asset.status.map((stat) => {
                      return fiveYears[3] === stat.year && stat.status;
                    })}
                  </TableTD>
                  <TableTD>
                    {asset.status.map((stat) => {
                      return fiveYears[4] === stat.year && stat.status;
                    })}
                  </TableTD>
                </TableTR>
              ))}
            </tbody>
          </Table>

          {/* Footer */}
          <Footer>
            <h3>Summary</h3>
            <div>
              {/* {fiveYearsReport.room.} */}
              {fiveYearsReport.room.counts.map((count, index) => (
                <div key={index}>
                  <h4>{count.year}</h4>
                  <p>
                    Good condition <span>{count.goodCondition}</span>
                  </p>
                  <p>
                    New <span>{count.new}</span>
                  </p>
                  <p>
                    Lost <span>{count.lost}</span>
                  </p>
                  <p>
                    For Repairs <span>{count.forRepair}</span>
                  </p>
                  <p>
                    For Replacements <span>{count.forReplacement}</span>
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

export default PrintFiveYearsReports;
