import { useState } from "react";
import { useMutation } from "@apollo/client";
import { postJobs } from "../graphql/mutation";

function SubmitForm(props) {
  const { history } = props;
  const [isData, setData] = useState({
    title: "",
    commitmentId: "",
    companyName: "",
    locationNames: "",
    userEmail: "",
    description: "",
    applyUrl: "",
  });
  const [postJob, { data, loading, error }] = useMutation(postJobs, {
    variables: {
      input: {
        title: isData.title,
        commitmentId: isData.commitmentId,
        companyName: isData.companyName,
        locationNames: isData.locationNames,
        userEmail: isData.userEmail,
        description: isData.description,
        applyUrl: isData.applyUrl,
      },
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ${error.message}</p>;
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...isData,
      [e.target.name]: value,
    });
  };
  const handleSubmit = () => {
    setData({
      title: "",
      commitmentId: "",
      companyName: "",
      locationNames: "",
      userEmail: "",
      description: "",
      applyUrl: "",
    });
    postJob();
  };
  return (
    <div className="submitForm">
      <div className="pageTitle">
        <h1>Add New Job Opportunity</h1>
        <h4>Add job info and description below</h4>
        <button href="" className="btnBack" onClick={history.back}>
          Back
        </button>
      </div>
      <div className="jobFormWrapper">
        <form className="jobForm">
          <div className="inputBoxWrapper">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="inputBox"
              value={isData.title}
              onChange={handleChange}
            />
          </div>
          <div className="inputBoxWrapper">
            <label>Commitment Id</label>
            <input
              type="text"
              name="commitmentId"
              className="inputBox"
              value={isData.commitmentId}
              onChange={handleChange}
            />
          </div>
          <div className="inputBoxWrapper">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              className="inputBox"
              value={isData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="inputBoxWrapper">
            <label>Location Names</label>
            <input
              type="text"
              name="locationNames"
              className="inputBox"
              value={isData.locationNames}
              onChange={handleChange}
            />
          </div>
          <div className="inputBoxWrapper">
            <label>Email</label>
            <input
              type="email"
              name="userEmail"
              className="inputBox"
              value={isData.userEmail}
              onChange={handleChange}
            />
          </div>
          <div className="inputBoxWrapper">
            <label>ApplyUrl</label>
            <input
              type="url"
              name="applyUrl"
              className="inputBox"
              value={isData.applyUrl}
              onChange={handleChange}
            />
          </div>
          <div className="textAreaWrapper">
            <label>Description</label>
            <textarea
              rows="5"
              type="text"
              name="description"
              className="inputBox"
              value={isData.description}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btnPrimary submitBtn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubmitForm;
