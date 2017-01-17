import React from 'react';
import { Router, IndexRoute, Route } from 'dva/router';

import App from "./routes/App.js";
import Home from "./routes/Home";
import {Heart2Demo} from "./routes/Hearts";
import {Spade2Demo} from "./routes/Spades";
import WIP from "./components/WIP";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="heart/heart2" component={Heart2Demo}/>
        <Route path="spade/spade2" component={Spade2Demo}/>
        <Route path='*' component={WIP}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
