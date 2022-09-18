import styled from "styled-components";

/** butto types */
type ButtonProps = {
  textSize?: number;
  isDisabled?: boolean;
  width?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  ph?: number;
  pv?: number;
};

export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  background-color: ${(props) =>
    props.isDisabled ? "gray" : props.theme.colors.primary};
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : "0")};
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : "0")};
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "0")};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "0")};
  padding: ${(props) =>
    props.ph ? `${props.ph}px 0px` : props.pv ? `0px ${props.pv}` : "0"};
  font-size: ${(props) => (props.textSize ? `${props.textSize}px` : "18px")};
  color: #ffffff;
  border: none;
  display: block;
  font-weight: bold;
  border-radius: 5px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  &:hover {
    cursor: ${(props) => (props.isDisabled ? "default" : "pointer")};
    background-color: ${(props) =>
      props.isDisabled ? "gray" : props.theme.colors.secondary};
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
`;
