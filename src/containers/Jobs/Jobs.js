import React, { useState, useEffect } from "react";
import "./Jobs.scss";
import data from "../../json/data.json";
import JobListing from "../../components/JobListing/JobListing";
import { useSelector } from "react-redux";
export default function Jobs() {
  const filters = useSelector((state) => state.filters);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(data);
  });
  useEffect(() => {
    setFilteredData(data.filter((job) => !filters.includes(job.contract)));
  }, [filters]);
  return (
    <div
      className="jobs"
      style={filters.length ? { margin: "15px auto 80px auto" } : null}
    >
      {filteredData.map((job, id) => {
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
    </div>
  );
}
