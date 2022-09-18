import HistoryComponent from "../components/history";
import { HistoryContextProvider } from "../context";

const History: React.FC = () => {
  return (
    <HistoryContextProvider>
      <HistoryComponent />
    </HistoryContextProvider>
  );
};

export default History;
