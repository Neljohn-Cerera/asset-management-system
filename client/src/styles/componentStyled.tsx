import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  border: none;
  box-sizing: border-box;
  display: block;
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
  width: 100%;
  outline: none;
  height: 60px;
  line-height: 60px;
  border-radius: 15px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 0 50px;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  box-shadow: 0px opx 20px 0px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  height: 60px;
  line-height: 60px;
  border-radius: 15px;
  margin-bottom: 20px;
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
  background: none;

  &:focus{
    border-color: ${(props) => props.theme.colors.text};
  }
  &:focus:invalid{
    border-color: #cc1e2b;
  }
`;
