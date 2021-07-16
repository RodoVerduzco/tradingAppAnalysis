import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Workspace from '../../components/Workspace/Workspace';

const PageRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/xx" exact render={Workspace} />
        <Route path="/workspace1" exact render={Workspace} />
        <Route path="/analysis" exact render={Workspace} />
      </Switch>
    </Router>
  );
};

export default PageRoutes;
