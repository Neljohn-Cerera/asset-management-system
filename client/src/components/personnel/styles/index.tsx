import styled from "styled-components";

export const PersonnelContainer = styled.div`
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

export const Form = styled.form`
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
export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
  margin: 5px;
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
  color: ${(props) => props.theme.colors.text};
  display: inline-block;
  ::placeholder {
    opacity: 0.5;
    color: ${(props) => props.theme.colors.text};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.text};
  }
`;

export const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 15em;
  font-weight: 600;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
`;

