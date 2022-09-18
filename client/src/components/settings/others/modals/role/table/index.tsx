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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {settingsArrayStates.roles.map((role, index) => (
            <tr key={role._id}>
              <td>{index + 1}</td>
              <td>{role._id}</td>
              <td>{role.name}</td>
              <td>
                <div style={{ justifyContent: "center" }}>
                  <button
                    onClick={() =>
                      handleClickModalChildrenUpdate("role update", {
                        _id: role._id,
                        roleName: role.name,
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
