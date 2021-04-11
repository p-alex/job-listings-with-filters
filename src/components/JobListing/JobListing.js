import React from "react";
import "./JobListing.scss";
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
        <span>{role}</span>
        <span>{level}</span>
        {languages.map((language) => {
          return <span key={language}>{language}</span>;
        })}
        {tools.map((tool) => {
          return <span key={tool}>{tool}</span>;
        })}
      </div>
    </div>
  );
}
