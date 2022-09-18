import React from "react";
import { Input, InputContainer, Label } from "./style";
type CInputProps = {
  width?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  ref?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
  label: string /** required */;
  labelRight?: boolean;
  labelCenter?: boolean;
  labelTextSize?: number;
  inputName: string /** required */;
  required?: boolean;
  inputType: "text" | "date" | "number" | "password" | "email" /** required */;
  inputpPlaceholder?: string;
  inputDisabled?: boolean;
  inputTextSize?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
};

const CInput: React.FC<CInputProps> = ({
  required = true,
  inputDisabled = false,
  labelRight = false,
  labelCenter = false,
  value = undefined,
  ...props
}): JSX.Element => {
  return (
    <InputContainer
      width={props.width}
      mr={props.mr}
      ml={props.ml}
      mt={props.mt}
      mb={props.mb}
    >
      <Label
        labelRight={labelRight}
        labelCenter={labelCenter}
        labelTextSize={props.labelTextSize}
        htmlFor={props.inputName}
      >
        {props.label}
      </Label>
      <Input
        ref={props.ref}
        inputTextSize={props.inputTextSize}
        inputDisabled={inputDisabled}
        required={required}
        id={props.inputName}
        name={props.inputName}
        placeholder={props.inputpPlaceholder}
        type={props.inputType}
        onChange={props.onChange}
        disabled={inputDisabled}
        value={value}
      />
    </InputContainer>
  );
};

export default CInput;
