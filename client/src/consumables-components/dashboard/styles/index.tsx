import styled from "styled-components";

export const StockDashboardContainer = styled.div<{ height: number }>`
  display: flex;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.background};
  width: 100vw;
  height: ${(props) => `${props.height}px`};
`;

export const PieChartContainer = styled.div`
  flex: 1;
  display: flex;
`;

export const TableContainer = styled.div`
  flex: 1;
  padding-left: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  & tr:hover {
    background-color: #ddd;
  }

  & th {
    /* position: -webkit-sticky;
    position: sticky;
    top: 0; */
    font-size: 14px;
    font-weight: 600;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    &:first-child {
      text-align: left;
    }
  }
  & td {
    padding-left: 5px;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
  }
`;
