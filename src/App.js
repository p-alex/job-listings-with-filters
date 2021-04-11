import "./App.scss";
import Header from "./components/Header/Header";
import JobsContainer from "./containers/JobsContainer/JobsContainer";
import JobListing from "./components/JobListing/JobListing";
import data from "./json/data.json";
function App() {
  return (
    <>
      <Header />
      <JobsContainer>
        {data.map((job, id) => {
          return (
            <JobListing
              key={id}
              company={job.company}
              logo={job.logo}
              isNew={job.new}
              isFeatured={job.featured}
              position={job.position}
              role={job.role}
              level={job.level}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              languages={job.languages}
              tools={job.tools}
            />
          );
        })}
      </JobsContainer>
    </>
  );
}

export default App;
