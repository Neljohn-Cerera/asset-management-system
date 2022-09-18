import styled from "styled-components";

/** flex types */
type FlexProps = {
  column?: boolean;
  fullWidth?: boolean;
};
/**
 * props `column:boolean`
 */
export const Flex = styled.div<FlexProps>`
  width: ${(props) => props.fullWidth && "100%"};
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;

/** label types */
type Labelprops = {
  align: "left" | "right" | "center";
  textSize?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
};
/**
 * defaults `font-size:16px`
 *
 * props `align: "left" | "right" | "center"` `textSize?:number`
 */
export const Label = styled.label<Labelprops>`
  color: ${(props) => props.theme.colors.text};
  text-align: ${(props) => props.align};
  font-size: ${(props) => (props.textSize ? `${props.textSize}px` : "18px")};
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : "0")};
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : "0")};
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "0")};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "0")};
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: grid;
  place-items: center;
`;
