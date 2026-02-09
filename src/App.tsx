import CEQuarterlyReport from "./components/CEQuarterlyReport";
import IntialCEReport from "./components/InitialCEReport";
import InitialSFCReport from "./components/InitialSFCReport";
import SFCQuarterlyReport from "./components/SFCQuarterlyReport";
import SHInitialReport from "./components/SHInitialReport";
import SHQuarterlyReport from "./components/SHQuarterlyReport";

function App() {
  return (
    <>
      <CEQuarterlyReport />
      <SHQuarterlyReport />
      <SFCQuarterlyReport />
      <InitialSFCReport />
      <SHInitialReport />
      <IntialCEReport />
    </>
  );
}

export default App;
