import React from "react";
import "./JobListing.scss";
import { addFilter } from "../../actions/filters";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
export default function JobListing({
  company,
  logo,
  isNew,
  isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) {
  const dispatch = useDispatch();
  const handleFilter = (filter) => dispatch(addFilter(filter));
  return (
    <AnimatePresence>
      <motion.div
        key={company}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={isFeatured ? "listing featured" : "listing"}
      >
        <div className="listing_jobDetailsContainer">
          <div className="listing_image">
            <img src={logo} alt="company logo" />
          </div>
          <div className="listing_infoContainer">
            <div className="listing_companyAndType">
              <p>{company}</p>
              {isNew && (
                <span
                  style={{
                    background: "var(--disaturatedDarkCyan)",
                  }}
                >
                  New!
                </span>
              )}
              {isFeatured && (
                <span
                  style={{
                    background: "var(--veryDarkGrayishCyan)",
                  }}
                >
                  Featured
                </span>
              )}
            </div>
            <div className="listing_position">
              <h2>{position}</h2>
            </div>
            <div className="listing_jobInfo">
              <p>{postedAt}</p>
              <div className="circle"></div>
              <p>{contract}</p>
              <div className="circle"></div>
              <p>{location}</p>
            </div>
          </div>
        </div>
        <div className="listing_languages">
          <span onClick={() => handleFilter(role)}>{role}</span>
          <span onClick={() => handleFilter(level)}>{level}</span>
          {languages.map((language) => (
            <span onClick={() => handleFilter(language)} key={language}>
              {language}
            </span>
          ))}
          {tools.map((tool) => (
            <span onClick={() => handleFilter(tool)} key={tool}>
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
