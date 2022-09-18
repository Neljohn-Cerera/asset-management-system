import { useContext } from "react";
import * as FaIcons from "react-icons/fa";
import Table from "../../Table";
import { formatDate } from "../../../utils/formatDate";
import AssetContext from "../../../context/asset/context";

const AssetTableComponent: React.FC = () => {
  const {
    assetArrayStates,
    assetStates,
    handleClickAddAsset,
    handleClickUpdateAsset,
    handleClickDeleteAsset,
  } = useContext(AssetContext);

  return (
    <Table title="Assets" buttonText="asset" handleNew={handleClickAddAsset}>
      <>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No.</th>
            <th>Item</th>
            <th>Status</th>

            <th style={{ fontSize: "10px" }}>Purchase Date</th>
            <th style={{ fontSize: "10px" }}>Price</th>
            <th style={{ fontSize: "10px" }}>Usefull Lifes</th>
            <th style={{ fontSize: "10px" }}>End Year</th>
            <th style={{ fontSize: "10px" }}>Calculated Depreciation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {assetArrayStates.assets.map((asset, index) => {
            let depreciationPrice = parseFloat(asset.price!) / asset.useFullLife!;
            let currentYear = new Date().getFullYear();
            let currentMonth = new Date().getMonth() + 1;
            let purchaseYear = new Date(asset.purchaseDate).getFullYear();
            let purchaseMonth = new Date(asset.purchaseDate).getMonth() + 1;
            let endYear = purchaseYear + asset.useFullLife!;
            let calculatedDepreciation =
              currentYear <= endYear && currentMonth >= purchaseMonth
                ? parseFloat(asset.price!) -
                  (currentYear - purchaseYear) * depreciationPrice
                : currentYear <= endYear && currentMonth < purchaseMonth
                ? parseFloat(asset.price!) -
                  (currentYear - purchaseYear) * depreciationPrice +
                  depreciationPrice
                : 0;
            return (
              <tr key={asset._id}>
                <td>
                  <p>{assetStates.page * 5 - 4 + index}</p>
                </td>
                <td>
                  <div>
                    <p>{asset.name}</p>
                    <p>{asset.code}</p>
                  </div>
                </td>

                <td>{asset.status === null ? "none" : asset.status?.name}</td>
                <td>
                  {formatDate(
                    new Date(asset.purchaseDate).toLocaleString("en-US", {
                      timeZone: "Asia/Manila",
                    })
                  )}
                </td>
                <td>{`₱ ${asset.price}`}</td>
                <td>
                  {asset.useFullLife ? `${asset.useFullLife} years` : "none"}
                </td>
                <td>{endYear}</td>
                <td>
                  {calculatedDepreciation && asset.useFullLife !== 0
                    ? `${Math.round(calculatedDepreciation)}`
                    : "0"}
                </td>
                <td>
                  <div style={{ justifyContent: "center" }}>
                    <button onClick={(e) => handleClickUpdateAsset(e, asset)}>
                      <FaIcons.FaPenSquare size={18} color="blue" />
                    </button>
                    <button
                      onClick={() =>
                        handleClickDeleteAsset(asset._id as string)
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

export default AssetTableComponent;
