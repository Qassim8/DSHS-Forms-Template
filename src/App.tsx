import CEQuarterlyReport from "./components/CEQuarterlyReport";
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
    </>
  );
}

export default App;
