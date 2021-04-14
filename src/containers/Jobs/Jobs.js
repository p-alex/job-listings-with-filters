import React, { useState, useEffect } from "react";
import "./Jobs.scss";
import data from "../../json/data.json";
import JobListing from "../../components/JobListing/JobListing";
import { useSelector } from "react-redux";
export default function Jobs() {
  const filters = useSelector((state) => state.filters);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if (filters) {
      let newData = data.filter((d) =>
        filters.every(
          (filter) =>
            d.role === filter ||
            d.level === filter ||
            d.languages.includes(filter) ||
            d.tools.includes(filter)
        )
      );
      setFilteredData(newData);
      return;
    }
    setFilteredData(data);
  }, [filters]);
  return (
    <div className="jobs">
      {filteredData.map((job) => (
        <JobListing
          key={job.id}
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
      ))}
    </div>
  );
}
