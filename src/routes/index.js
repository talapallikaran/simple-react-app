import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddJob from "../view/AddJob/AddJob";
import Home from "../view/Home/Home";

/*Component file imports*/

function Routers(props) {
  const { history } = props;
  return (
    <Router location={history} navigator={history}>
      <Routes>
        <Route exact path={"/"} element={<Home history={history} />} />
        <Route exact path={"/Add-Job"} element={<AddJob history={history} />} />
      </Routes>
    </Router>
  );
}

export default Routers;
