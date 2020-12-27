import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./constants/routes";
import Home from "./Screens/Home";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
    </Switch>
  </Router>
);

export default Routes;
