import React from "react";
import { ModalContainer } from "../../../../shared/styles";
import { MocalContext, ModalHeader, Title } from "../../../styles";

type Props = {
  title: string;
};

const ModalContentComponent: React.FC<Props> = (props): JSX.Element => {
  return (
    <ModalContainer>
      <MocalContext>
        <ModalHeader>
          <Title>{props.title}</Title>
        </ModalHeader>
        {props.children}
      </MocalContext>
    </ModalContainer>
  );
};

export default ModalContentComponent;
