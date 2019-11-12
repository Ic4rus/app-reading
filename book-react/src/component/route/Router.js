import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import * as RouteMap from '../../constants/RouteMap';
import Home from '../../page/home/Home';

const Router = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={RouteMap.ROUTE_LIST_NEW} />
      <Route exact path={RouteMap.ROUTE_LIST_NEW} component={Home} />
      <Route exact path={RouteMap.ROUTE_LIST_HOT} component={Home} />
      <Route exact path={RouteMap.ROUTE_LIST_MOST} component={Home} />
    </Switch>
  );
};

export default Router;
