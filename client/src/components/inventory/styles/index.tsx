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
export const ReportContainer = styled.div`
  background-color: red;
`;

export const ModalPersonnelContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  z-index: 200;
  & div {
    position: relative;
    background-color: ${(props) => props.theme.colors.background};
    width: 90%;
    max-height: 450px;
    border-radius: 5px;
    padding: 50px;
    overflow: auto;
    & span {
      position: absolute;
      top: 15px;
      right: 15px;
      color: red;
      font-size: 12px;
      font-weight: 600;
      &:hover {
        font-size: 14px;
        cursor: pointer;
      }
    }
    & div {
      display: flex;
      align-items: flex-start;
      width: 100%;
      height: auto;
      padding: 0;
    }
  }
  & h4 {
    color: ${(props) => props.theme.colors.text};
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    margin: 10px 0;
  }
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
//
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-color: gray;
  margin: 5px;
  border-radius: 5px;
  & p {
    color: ${(props) => props.theme.colors.text};
    font-size: 14px;
    font-weight: 400;
    & span {
      color: ${(props) => props.theme.colors.text};
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const FormSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 700px;
  padding: 25px;
  background-color: ${(props) => props.theme.colors.background};
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  & h2 {
    font-size: 15em;
    font-weight: 600;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 10px;
  }
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
export const ButtonSearch = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  border: none;
  box-sizing: border-box;
  display: block;
  cursor: pointer;
  font-size: 16px;
  width: 150px;
  height: 60px;
  margin-right: 15px;
  border-radius: 5px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
`;

export const StyledSelect = styled.select`
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
  color: #9e9e9e;
  display: inline-block;
  & option {
    /* color: red; */
    :not(:first-of-type) {
      color: black;
    }
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.text};
  }
`;
