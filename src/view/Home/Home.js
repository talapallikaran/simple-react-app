import React from "react";
import Search from "../../components/Search";

function Home(props) {
  const { history } = props;
  return <Search history={history} />;
}

export default Home;
