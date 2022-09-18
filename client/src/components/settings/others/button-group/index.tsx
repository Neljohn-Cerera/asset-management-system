import React from "react";
import { CButton } from "../../../shared";
import { Flex } from "../../../shared/styles";

type Props = {
  btnLeftText: string;
  onClickLeft: React.MouseEventHandler<HTMLButtonElement> | undefined;
   btnRightText: string;
  onClickRight: React.MouseEventHandler<HTMLButtonElement> | undefined;
 
};

const ButtonGroupComponent: React.FC<Props> = ({
  btnLeftText,
  onClickLeft,
  btnRightText,
  onClickRight
}): JSX.Element => {
  return (
    <Flex>
      <CButton ph={20} mb={10} text={btnLeftText} onClick={onClickLeft}/>
      <CButton ph={20} ml={10} mb={10} text={btnRightText} onClick={onClickRight}/>
    </Flex>
  );
};

export default ButtonGroupComponent;
