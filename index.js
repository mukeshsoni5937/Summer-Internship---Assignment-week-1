import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import SuccessPage from "./SuccessPage";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/success" component={SuccessPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
