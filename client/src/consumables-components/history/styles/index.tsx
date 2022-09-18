import styled from "styled-components";

export const StocksHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 86vh;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.background};
  width: 100vw;
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
