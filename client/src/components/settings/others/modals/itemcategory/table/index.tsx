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
          {settingsArrayStates.itemCategories.map((category, index) => (
            <tr key={category._id}>
              <td>{index + 1}</td>
              <td>{category._id}</td>
              <td>{category.name}</td>
              <td>
                <div style={{ justifyContent: "center" }}>
                  <button
                    onClick={() =>
                      handleClickModalChildrenUpdate("itemCategory update", {
                        _id: category._id,
                        itemCategoryName: category.name,
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
