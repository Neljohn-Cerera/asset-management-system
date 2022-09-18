import React from "react";
import { Button } from "./style";

type CButtonProps = {
  width?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  ph?: number;
  pv?: number;
  isDisabled?: boolean;
  text: string;
  textSize?: number;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const CButton: React.FC<CButtonProps> = ({
  isDisabled = false,
  ph = 20,
  ...props
}): JSX.Element => {
  return (
    <>
      <Button
        ph={ph}
        textSize={props.textSize}
        disabled={isDisabled}
        isDisabled={isDisabled}
        onClick={props.onClick}
        {...props}
      >
        {props.text}
      </Button>
    </>
  );
};

export default CButton;
