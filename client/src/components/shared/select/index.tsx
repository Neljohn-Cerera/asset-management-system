import React from "react";
import { Select, SelectContainer, Label } from "./style";
type CSelectProps<T> = {
  isRoomReport?: boolean;
  width?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  label: string /** required */;
  labelRight?: boolean;
  labelCenter?: boolean;
  labelTextSize?: number;
  selectName: string /** required */;
  selectDisabled?: boolean;
  selectTextSize?: number;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  value?: string | number | readonly string[] | undefined;
  selectData?: T[];
};

const CSelect = <T extends unknown>({
  isRoomReport = false,
  selectDisabled = false,
  labelRight = false,
  labelCenter = false,
  selectData = [],
  ...props
}: CSelectProps<T>): JSX.Element => {
  return (
    <SelectContainer
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
        htmlFor={props.selectName}
      >
        {props.label}
      </Label>
      <Select
        selectTextSize={props.selectTextSize}
        disabled={selectDisabled}
        selectDisabled={selectDisabled}
        id={props.selectName}
        name={props.selectName}
        onChange={props.onChange}
        value={props.value}
      >
        {selectData?.map((data: any) => (
          <option key={data._id} value={isRoomReport ? data._id : data.name}>
            {data.name}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};
//
export default CSelect;
