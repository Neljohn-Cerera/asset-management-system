import React from "react";
import { CheckBox, CheckBoxContainer, Label } from "./style";
type CCheckBoxProps = {
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  label: string;
  labelTextSize?: number;
  checkBoxName: string;
  checked: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const CCheckbox: React.FC<CCheckBoxProps> = (props): JSX.Element => {
  return (
    <CheckBoxContainer mr={props.mr} ml={props.ml} mt={props.mt} mb={props.mb}>
      <CheckBox
        id={props.checkBoxName}
        name={props.checkBoxName}
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <Label labelTextSize={props.labelTextSize} htmlFor={props.checkBoxName}>
        {props.label}
      </Label>
    </CheckBoxContainer>
  );
};

export default CCheckbox;
