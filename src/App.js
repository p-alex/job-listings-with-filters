import Header from "./components/Header/Header";
import Jobs from "./containers/Jobs/Jobs";
import JobFilters from "./components/JobFilters/JobFilters";

function App() {
  return (
    <>
      <Header />
      <JobFilters />
      <Jobs />
    </>
  );
}

export default App;
