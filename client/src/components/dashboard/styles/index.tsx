import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100%;
  box-sizing: border-box;
`;

type StatisticsContainerProps = {
  height: number;
};
export const StatisticsContainer = styled.div<StatisticsContainerProps>`
  background-color: red;
  width: 100%;
  height: ${(props) => `${props.height}px`};
  display: flex;
`;

export const CardContainer = styled.div<{ background: string }>`
  flex: 1;
  background-color: ${(p) =>
    p.background === "red"
      ? "#eb4135"
      : p.background === "yellow"
      ? "#b4c04b"
      : p.background === "pink"
      ? "#ff6384"
      : p.background === "blue"
      ? "#4bc0c0"
      : p.background === "dark red"
      ? "#743935"
      : null};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & span {
    font-size: 16px;
    color: white;
    font-weight: normal;
  }
  & p {
    font-size: 20px;
    color: white;
    font-weight: bolder;
    margin: 10px 0;
  }
  & button {
    padding: 15px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    &:hover {
      color: #ffffff;
      padding: 20px 25px;
      cursor: pointer;
      background-color: ${(p) =>
        p.background === "red"
          ? "#681711"
          : p.background === "yellow"
          ? "#656e12"
          : p.background === "pink"
          ? "#801930"
          : p.background === "dark red"
          ? "#4d120e"
          : null};
    }
  }
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 70%;
  height: 90%;
  padding: 20px;
  border-radius: 5px;
  overflow-y: auto;
`;
export const ModalCloseContainer = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ModalCloseButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    padding: 15px 25px;
    font-size: 18px;
    background-color: #7a2828;
  }
`;
export const ModalTitle = styled.h1`
  font-size: 18px;
  text-align: left;
  margin-bottom: 20px;
`;

export const TableContainer = styled.table`
  background-color: ${(props) => props.theme.colors.background};
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-height: 200px;
  border-collapse: collapse;
  & td,
  th {
    font-size: 16px;
    border: 1px solid #ddd;
    color: ${(props) => props.theme.colors.text};
    padding: 8px;
  }
  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    font-weight: 500;
  }
  & td {
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 12px;
    font-weight: 400;
  }
  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  & tr:hover {
    background-color: #ddd;
  }
  & th:first-child {
    width: 50px;
  }
  & td:first-child {
    width: 50px;
  }
  & th:nth-child(2) {
    width: 200px;
  }
  & td:nth-child(2) {
    width: 200px;
    & div {
      display: flex;
      flex-direction: column;
      & p {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
  & td:last-child {
    & p {
      text-decoration: underline;
      font-size: 12px;
      font-weight: 900;
      color: ${(props) => props.theme.colors.primary};
      &:hover {
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
`;
