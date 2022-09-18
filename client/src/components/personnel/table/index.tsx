import React, { useContext } from "react";
import Table from "../../Table";
import * as FaIcons from "react-icons/fa";
import PersonnelContext from "../../../context/personnel/context";

const TableComponent: React.FC = (): JSX.Element => {
  const {
    personnelStates,
    personnelArrayStates,
    handleClickAddPersonnel,
    handleClickUpdatePersonnel,
    handleClickDeletePersonnel,
    handleClickAddAccount,
  } = useContext(PersonnelContext);
  return (
    <Table
      title="Personnel"
      buttonText="personnel"
      handleNew={handleClickAddPersonnel}
    >
      <>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No.</th>
            <th>Name</th>
            <th>Idnumber</th>
            <th>Department</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {personnelArrayStates.personnels.map((personnel, index) => (
            <tr key={personnel._id}>
              <td>
                <p>{personnelStates.page * 5 - 4 + index}</p>
              </td>
              <td>{`${personnel.firstName} ${personnel.lastName}`}</td>
              <td>{personnel.idNumber}</td>
              <td>{personnel.department?.name}</td>
              <td>
                <input type="checkbox" checked readOnly />
              </td>
              <td>
                <div>
                  <button
                    onClick={(e) => handleClickUpdatePersonnel(e, personnel)}
                  >
                    <FaIcons.FaPenSquare size={18} color="blue" />
                  </button>
                  <button
                    onClick={(e) =>
                      handleClickDeletePersonnel(e, personnel._id as string)
                    }
                  >
                    <FaIcons.FaTrash size={18} color="red" />
                  </button>
                  {personnel.account ? null : (
                    <button
                      onClick={(e) => handleClickAddAccount(e, personnel)}
                    >
                      <span> Add account</span>
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </>
    </Table>
  );
};

export default TableComponent;
