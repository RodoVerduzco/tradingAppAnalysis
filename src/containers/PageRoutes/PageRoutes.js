import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Analysis from '../../components/AnalysisPage/Analysis';

import Workspace from '../../components/Workspace/Workspace';

const PageRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/workspace1" />
      <Route
        path="/workspace1"
        exact
        render={(props) => <Workspace {...props} />}
      />
      <Route
        path="/workspace2"
        exact
        render={(props) => <Workspace {...props} />}
      />
      <Route
        path="/workspace4"
        exact
        render={(props) => <Workspace {...props} />}
      />
      <Route
        path="/workspace5"
        exact
        render={(props) => <Workspace {...props} />}
      />
      <Route
        path="/workspace6"
        exact
        render={(props) => <Workspace {...props} />}
      />
      <Route
        path="/analysis"
        exact
        render={(props) => <Analysis {...props} />}
      />
    </Switch>
  );
};

export default PageRoutes;
