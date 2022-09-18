import { useContext } from "react";
import * as FaIcons from "react-icons/fa";
import AccountContext from "../../../context/account/context";
import Table from "../../Table";

const TableComponent = () => {
  const {
    accountStates,
    accountArrayStates,
    handleClickUpdateAccount,
    handleClickDeleteAccount,
  } = useContext(AccountContext);
  let count = 0;

  return (
    <Table title="Accounts">
      <>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No.</th>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {accountArrayStates.personnels.map((personnel) => {
            if (!personnel.account) return (
              <tr key={personnel._id}>
                <td>
                  <p>{accountStates.page * 5 - 4 + count++}</p>
                </td>
                <td>
                  <div>
                    <p>{personnel.firstName}</p>
                    <p>{personnel.lastName}</p>
                  </div>
                </td>
                <td>None</td>
                <td>None</td>
                <td>
                  {/* <div style={{ justifyContent: "center" }}>
                    <button onClick={() => handleClickUpdateAccount(personnel)}>
                      <FaIcons.FaPenSquare size={18} color="blue" />
                    </button>
                    <button
                      onClick={() =>
                        handleClickDeleteAccount(personnel._id as string)
                      }
                    >
                      <FaIcons.FaTrash size={18} color="red" />
                    </button>
                  </div> */}
                </td>
              </tr>
            );
            return (
              <tr key={personnel._id}>
                <td>
                  <p>{accountStates.page * 5 - 4 + count++}</p>
                </td>
                <td>
                  <div>
                    <p>{personnel.firstName}</p>
                    <p>{personnel.lastName}</p>
                  </div>
                </td>
                <td>{personnel.account?.email}</td>
                <td>{personnel.account.role?.name}</td>
                <td>
                  <div style={{ justifyContent: "center" }}>
                    <button onClick={() => handleClickUpdateAccount(personnel)}>
                      <FaIcons.FaPenSquare size={18} color="blue" />
                    </button>
                    <button
                      onClick={() =>
                        handleClickDeleteAccount(personnel._id as string)
                      }
                    >
                      <FaIcons.FaTrash size={18} color="red" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </>
    </Table>
  );
};

export default TableComponent;
