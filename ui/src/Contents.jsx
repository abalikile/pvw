import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductList from './ProductList.jsx';
import ProductReport from './ProductReport.jsx';
import ProductEdit from './ProductEdit.jsx';
import ProductView from './ProductView.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/products" />
	  <Route path="/products" component={ProductList} />
	  <Route path="/edit/:id" component={ProductEdit} />
	  <Route path="/view/:id" component={ProductView} />
      <Route path="/report" component={ProductReport} />
      <Route component={NotFound} />
    </Switch>
  );
}