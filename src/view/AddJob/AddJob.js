import React from "react";
import SubmitForm from "../../components/SubmitForm";

function AddJob(props) {
  const { history } = props;
  return <SubmitForm history={history} />;
}

export default AddJob;
