import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppHeader from 'component/AppHeader';
import AppMain from 'component/AppMain';
import AppSub1 from 'component/AppSub1';
import AppSub2 from 'component/AppSub2';
import './App.css';

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => (
  <Router basename="/app2" history={history}>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={AppMain} />
        <Route exact path="/sub1" component={AppSub1} />
        <Route exact path="/sub2" component={AppSub2} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
