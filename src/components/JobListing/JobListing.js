import React from "react";
import "./JobListing.scss";
import { addFilter } from "../../actions/filters";
import { useDispatch } from "react-redux";
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

  const handleFilter = (filter, type) => {
    dispatch(addFilter(filter, type));
  };

  return (
    <div className={isFeatured ? "listing featured" : "listing"}>
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
        <span onClick={() => handleFilter(role, "role")}>{role}</span>
        <span onClick={() => handleFilter(level, "level")}>{level}</span>
        {languages.map((language) => {
          return (
            <span
              onClick={() => handleFilter(language, "languages")}
              key={language}
            >
              {language}
            </span>
          );
        })}
        {tools.map((tool) => {
          return (
            <span onClick={() => handleFilter(tool, "tools")} key={tool}>
              {tool}
            </span>
          );
        })}
      </div>
    </div>
  );
}
