import styled from "styled-components";

export const HistoryContainer = styled.div`
  margin-top: "5px";
  display: flex;
  flex-direction: column;
  height: 86vh;
  padding: 65px 20px 0 20px;
  background-color: ${(props) => props.theme.colors.background};
  width: 100vw;
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

export const FormSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledInput = styled.input`
  display: block;
  background-color: ${(props) => props.theme.colors.background};
  box-sizing: border-box;
  margin: 5px;
  width: 100%;
  outline: none;
  height: 60px;
  line-height: 60px;
  border-radius: 5px;
  font-size: 18px;
  border: 1px solid #c2c0ca;
  font-style: normal;
  padding: 0 0 0 10px;
  color: ${(props) => props.theme.colors.text};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  display: inline-block;

  ::placeholder {
    opacity: 0.5;
    color: ${(props) => props.theme.colors.text};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.text};
  }
  &:focus:invalid {
    border-color: #cc1e2b;
  }
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  border: none;
  box-sizing: border-box;
  display: block;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
`;
