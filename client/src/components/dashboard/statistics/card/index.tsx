import React from "react";
import { CardContainer } from "../../styles";

type Props = {
  hasButton?: boolean;
  label: string;
  year: number | undefined;
  count: number;
  bgColor: "red" | "yellow" | "pink" | "blue" | "dark red";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const CardComponent: React.FC<Props> = (props): JSX.Element => {
  return (
    <CardContainer background={props.bgColor}>
      <span>
        {props.label} ({props.year})
      </span>
      <p>TOTAL : {props.count}</p>
      {props.hasButton && <button onClick={props.onClick}>View</button>}
    </CardContainer>
  );
};

export default CardComponent;
