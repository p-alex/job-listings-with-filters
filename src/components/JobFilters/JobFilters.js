import React from "react";
import "./JobFilters.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFilter, resetFilters } from "../../actions/filters";
import { motion, AnimatePresence } from "framer-motion";
export default function JobFilters() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const handleRemove = (filter) => dispatch(removeFilter(filter));
  const handleReset = () => dispatch(resetFilters());
  console.log("updated");
  return (
    <>
      <AnimatePresence>
        {filters.length !== 0 && (
          <motion.div
            className="jobFilters"
            key="filters"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="filter_container">
              {filters.map((filter) => (
                <div
                  key={filter}
                  className="filter"
                  onClick={() => handleRemove(filter)}
                >
                  <p>{filter}</p>
                  <i className="fas fa-times"></i>
                </div>
              ))}
            </div>

            <span className="clearFiltersBtn" onClick={handleReset}>
              Clear
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
