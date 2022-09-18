import React, { useContext } from "react";
import { CTable } from "../../../../../shared";
import * as FaIcons from "react-icons/fa";
import SettingsContext from "../../../../../../context/settings/context";

const TableComponent: React.FC = (): JSX.Element => {
  const { settingsArrayStates, handleClickModalChildrenUpdate } =
    useContext(SettingsContext);
  return (
    <CTable mb={20}>
      <>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No.</th>
            <th>Id</th>
            <th>Name</th>
            <th>No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {settingsArrayStates.rooms.map((room, index) => (
            <tr key={room._id}>
              <td>{index + 1}</td>
              <td>{room._id}</td>
              <td>{room.name}</td>
              <td>{room.no}</td>
              <td>
                <div style={{ justifyContent: "center" }}>
                  <button
                    onClick={() =>
                      handleClickModalChildrenUpdate("room update", {
                        _id: room._id,
                        roomName: room.name,
                        roomNo: room.no,
                      })
                    }
                  >
                    <FaIcons.FaPenSquare size={18} color="blue" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </>
    </CTable>
  );
};

export default TableComponent;
