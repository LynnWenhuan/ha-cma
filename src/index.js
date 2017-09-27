/* eslint-disable */
import React from 'react';
import createLoading from 'dva-loading';


import registerModels from './models/index';
import LoginPage from './routes/LoginPage';
import IndexPage from './routes/IndexPage';
import InsuredPage from './routes/InsuredPage';
import InsuredInfoPage from './routes/InsuredInfoPage';
import UsersPage from './routes/UsersPage';
import EditUserPage from './routes/EditUserPage';
import ListViewPage from './routes/ListViewPage';
import { Router, Route, IndexRoute } from 'dva/router';
import { Run } from 'snk-mobile-test';


export default Run({
  davParams: {
    onError() {
    }
  },
  router(history, rootComponent) {
    return (
      <Router history={history}>
        <Route path="/" component={rootComponent}>
          <IndexRoute component={LoginPage} />
          <Route path="/index" component={IndexPage} />
          <Route path="/insured" component={InsuredPage} />
          <Route path="/insuredInfo" component={InsuredInfoPage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/list" component={ListViewPage} />
          <Route path="/edit" component={EditUserPage} />
          <Route path="/add" component={EditUserPage} />
        </Route>
      </Router>
    );
  },
  extend(app) {
    app.use(createLoading());
    registerModels(app);
  },
});




