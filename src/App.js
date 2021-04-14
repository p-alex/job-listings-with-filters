import Header from "./components/Header/Header";
import Jobs from "./containers/Jobs/Jobs";
import JobFilters from "./components/JobFilters/JobFilters";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
function App() {
  const filters = useSelector((state) => state.filters);
  return (
    <>
      <Header />
      <JobFilters />
      <Jobs />
      <Footer />
    </>
  );
}

export default App;
