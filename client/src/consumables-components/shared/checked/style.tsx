import styled from "styled-components";

/** div types */
type CheckBoxContainerProps = {
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
};
/**
 * defaults : `margin-left:0` `margin-right:0` `margin-top:0` `margin-bottom:0`
 *
 * props `mr?:number` `ml?:number` `mt?:number` `mb?:number`
 */
export const CheckBoxContainer = styled.div<CheckBoxContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : "0")};
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : "0")};
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "0")};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "0")};
`;
/** label types */
type Labelprops = {
  labelTextSize?: number;
};
/**
 * defaults `font-size:16px`
 *
 * props `labelTextSize?:number`
 */
export const Label = styled.label<Labelprops>`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) =>
    props.labelTextSize ? `${props.labelTextSize}px` : "18px"};
  margin-left: 5px;
`;

export const CheckBox = styled.input`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;
