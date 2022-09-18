import AssetComponent from "../components/assets";
import { AssetContextProvider } from "../context";

const Assets: React.FC = (): JSX.Element => {
  return (
    <AssetContextProvider>
      <AssetComponent />
    </AssetContextProvider>
  );
};

export default Assets;
