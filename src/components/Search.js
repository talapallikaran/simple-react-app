import { useQuery } from "@apollo/client";
import { useState } from "react";
import { getAllJobs } from "../graphql/query";
import JobDetails from "./JobDetails";

function Search(props) {
  const { history } = props;
  const [selectData, setSelectData] = useState();
  const { loading, error, data } = useQuery(getAllJobs);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ${error.message}</p>;
  const jobSelect = (selected) => {
    setSelectData(selected);
  };
  const addJob = () => {
    history.push("/Add-Job");
  };
  return (
    <div className="pageWrapper">
      <div className="searchBarWrapper">
        <div className="searchBarFormWrapper">
          <form className="searchBarForm">
            <div className="jobTitleWrapper">
              <span className="barText">What</span>
              <input
                placeholder="Job title, keywords, or company"
                type="search"
                className={"jobTitleInput"}
              />
            </div>
            <button type="submit" className="btnPrimary">
              Find jobs
            </button>
          </form>
        </div>
      </div>
      <div className="tabBodyWrapper">
        <div className="tabBody">
          <div className="bodyLeft">
            <a href="" className="btnPrimary" onClick={addJob}>
              Add Job
            </a>
            {data &&
              data.jobs.length > 0 &&
              data.jobs.map((jobData) => {
                return (
                  <button
                    className="jobCard"
                    key={Math.random()}
                    onClick={() => jobSelect(jobData)}
                  >
                    <p className="jobTitle">{jobData.title}</p>
                    <p className="companyName">{jobData.company.name}</p>
                    <p className="location">{jobData.locationNames}</p>
                    <p className="description">{jobData.description}</p>
                    <span className="date">
                      Posted at {jobData.commitment.createdAt}
                      <span>
                        {" "}
                        • From <b>{jobData.userEmail}</b>
                      </span>
                    </span>
                  </button>
                );
              })}
          </div>
          {selectData && <JobDetails selectData={selectData} />}
        </div>
      </div>
    </div>
  );
}

export default Search;
