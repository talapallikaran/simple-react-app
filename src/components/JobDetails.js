import { useQuery } from "@apollo/client";
import { getParticularJob } from "../graphql/query";

function JobDetails(props) {
  const { selectData } = props;
  const { loading, error, data } = useQuery(getParticularJob, {
    variables: {
      input: {
        companySlug: selectData && selectData.company.slug,
        jobSlug: selectData && selectData.slug,
      },
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ${error.message}</p>;
  return (
    <div className="bodyRight">
      <div className="jobCard">
        <div className="cardTop">
          <p className="jobTitle">{data && data.job && data.job.title}</p>
          <p className="companyName">
            {data && data.job && data.job.company.name}
          </p>
          <p className="location">
            {data && data.job && data.job.locationNames}
          </p>
          <div className="btnGrp">
            <a
              className="applyBtn"
              href={`${data && data.job && data.job.applyUrl}`}
            >
              Apply on company site
            </a>
          </div>
        </div>
        <div className="cardBody">
          <p className="discription">
            {data && data.job && data.job.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
