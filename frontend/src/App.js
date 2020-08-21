import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MicroFrontend from './MicroFrontendHook';
import AppHeader from './component/AppHeader';

const {
  REACT_APP_1_HOST: app1Host,
  REACT_APP_2_HOST: app2Host,
} = process.env;

const App1 = ({ history }) => (
  <MicroFrontend history={history} host={app1Host} name="App1" />
);

const App2 = ({ history }) => (
  <MicroFrontend history={history} host={app2Host} name="App2" />
); 

const App = () => (
  <Router>
     <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={App1} />
        <Route exact path="/app1" component={App1} />
        <Route exact path="/app2" component={App2} />
        <Route exact path="/app2/*" component={App2} />
      </Switch>
    </React.Fragment>
  </Router>
);
 
export default App;