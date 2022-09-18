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
export const SelectContainer = styled.div<InputContainerProps>`
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
    props.labelTextSize ? `${props.labelTextSize}px` : "18px"};
  margin-bottom: 5px;
`;
/** select types */
type SelectProps = {
  selectTextSize?: number;
  selectDisabled?: boolean;
};
/**
 * defaults `font-size:18px`
 *
 * props `selectTextSize?:number` `selectDisabled?: boolean`
 */
export const Select = styled.select<SelectProps>`
  display: block;
  font-size: ${(props) =>
    props.selectTextSize ? `${props.selectTextSize}px` : "18px"};
  background-color: ${(props) =>
    props.selectDisabled ? "gray" : props.theme.colors.background};
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  outline: none;
  line-height: 60px;
  border-radius: 5px;
  border: 1px solid #c2c0ca;
  font-style: normal;
  padding: 0 0 0 10px;
  color: ${(props) => props.theme.colors.text};
  display: inline-block;
  ::placeholder {
    color: ${(props) => props.theme.colors.text};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.text};
  }
`;
