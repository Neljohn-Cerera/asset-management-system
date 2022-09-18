import React, { useContext } from "react";
import { History } from "../../../api/types";
import DashBoardContext from "../../../context/dashboard/context";
import { ModalContainer } from "../../shared/styles";
import {
  ModalCloseButton,
  ModalCloseContainer,
  ModalContent,
  ModalTitle,
  TableContainer,
} from "../styles";

const ModalComponent: React.FC = (): JSX.Element => {
  const { dashBoardArrayStates, handleCloseModal, dashBoardStates } =
    useContext(DashBoardContext);
  return (
    <ModalContainer>
      <ModalContent>
        <ModalCloseContainer>
          <ModalCloseButton onClick={handleCloseModal}>Close</ModalCloseButton>
        </ModalCloseContainer>
        <ModalTitle>
          {dashBoardStates.modalTitle} ({dashBoardArrayStates.settings?.year})
        </ModalTitle>
        <TableContainer>
          <thead>
            <tr>
              <th>#</th>
              <th>Asset</th>
              <th>Code</th>
              <th>Serial #</th>
              <th>Room</th>
              <th>Personnel</th>
            </tr>
          </thead>
          <tbody>
            {dashBoardArrayStates.assets?.map((asset: History, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{asset.item.name}</td>
                <td>{asset.item.code}</td>
                <td>{asset.item.serialNumber}</td>
                <td>{`${asset.room.name} - ${asset.room.no}`}</td>
                <td>{`${asset.personnel.firstName} ${asset.personnel.lastName}`}</td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalComponent;
