import React from "react";
import "./JobFilters.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFilter, resetFilters } from "../../actions/filters";
export default function JobFilters() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const handleRemove = (filter) => {
    dispatch(removeFilter(filter));
  };
  const handleReset = () => {
    dispatch(resetFilters());
  };
  return (
    <>
      {filters.length ? (
        <div className="jobFilters">
          <div className="filter_container">
            {filters.map((filter) => {
              return (
                <div
                  key={filter}
                  className="filter"
                  onClick={() => handleRemove(filter)}
                >
                  <p>{filter}</p>
                  <i className="fas fa-times"></i>
                </div>
              );
            })}
          </div>

          <span className="clearFiltersBtn" onClick={handleReset}>
            Clear
          </span>
        </div>
      ) : null}
    </>
  );
}
