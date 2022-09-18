import styled from "styled-components";

/** div types */
type InputContainerProps = {
  width?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
};
/**
 * defaults : `fullWidth:100%` `margin-left:0` `margin-right:0` `margin-top:0` `margin-bottom:0`
 *
 * props `width?:number` `mr?:number` `ml?:number` `mt?:number` `mb?:number`
 */
export const InputContainer = styled.div<InputContainerProps>`
  box-sizing: border-box;
  width: ${(props) => (props.width ? `${props.width}px` : `100%`)};
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : "0")};
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : "0")};
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "0")};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "0")};
`;
/** label types */
type Labelprops = {
  labelRight?: boolean;
  labelCenter?: boolean;
  labelTextSize?: number;
};
/**
 * defaults `text-align:left` `font-size:16px`
 *
 * props `labelRight?:boolean` `labelCenter?:boolean` `labelTextSize?:number`
 */
export const Label = styled.label<Labelprops>`
  color: ${(props) => props.theme.colors.text};
  text-align: ${(props) =>
    props.labelRight ? "right" : props.labelCenter ? "center" : "left"};
  font-size: ${(props) =>
    props.labelTextSize
      ? `${props.labelTextSize}px`
      : "18px"};
  margin-bottom: 5px;
`;
/** input types */
type InputProps = {
  inputTextSize?: number;
  inputDisabled?: boolean;
};
/**
 * defaults `font-size:18px`
 *
 * props `inputTextSize?:number`
 */
export const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  font-size: ${(props) =>
    props.inputTextSize
      ? `${props.inputTextSize}px`
      : "18px"};
  background-color: ${(props) =>
    props.inputDisabled ? "gray" : props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  box-sizing: border-box;
  padding: 0px 10px;
  line-height: 60px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #c2c0ca;
  font-style: normal;
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
