import styled from "styled-components";

type TableProps = {
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
};

export const Table = styled.table<TableProps>`
  background-color: ${(props) => props.theme.colors.background};
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  border-collapse: collapse;
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : "0")};
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : "0")};
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "0")};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "0")};
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
    font-weight: 600;
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
    & p {
      font-size: 12px;
      font-weight: 400;
    }
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
    & div {
      display: flex;
      justify-content: flex-start;
      & button {
        border: none;
        margin-right: 10px;
        & :hover {
          cursor: pointer;
          width: 24px;
          height: 24px;
        }
        & span {
          color: #ffffff;
          background-color: ${(props) => props.theme.colors.success};
          padding: 5px 10px;
          font-size: 12px;
          font-weight: 500;
          border-radius: 5px;
          &:hover {
            padding: 10px;
            font-size: 14px;
            font-weight: 500;
          }
        }
      }
    }
  }
`;
