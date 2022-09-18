import React, { useContext } from "react";
import { FormContainer, SubTitle } from "../../styles";
import { Flex } from "../../../shared/styles";
import { CSelect, CButton } from "../../../shared";
import ReportContext from "../../../../context/report/context";
import yearDataGenerator from "../../../../utils/yearDataGenerator";
const FormPerRoom: React.FC = () => {
  const { reportArrayStates, reportStates, handleChange, onGenerateClick } =
    useContext(ReportContext);
  const { data } = yearDataGenerator({ from: 2010, to: 2030 });
  const selectData = reportArrayStates.rooms.map((room) => {
    return { _id: room._id, name: `${room.name}-${room.no}` };
  });

  return (
    <FormContainer>
      <SubTitle>Personnel Report</SubTitle>
      <Flex>
        <CSelect
          isRoomReport
          selectData={selectData}
          label="Room"
          selectName="roomid"
          onChange={handleChange}
          value={reportStates?.roomid}
        />
        <CSelect
          selectData={data}
          ml={10}
          label="Year"
          selectName="roomYear"
          onChange={handleChange}
          value={reportStates?.roomYear}
        />
        <CButton
          ph={20}
          ml={10}
          text="Generate"
          onClick={(e) => onGenerateClick(e, "per room report")}
        />
      </Flex>
    </FormContainer>
  );
};

export default FormPerRoom;
