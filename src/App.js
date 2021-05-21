import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from './components';
import Resume from './components/Resume';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';

import './App.css';

function App() {
  return (
    <React.Fragment>

      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          {/* <Route exact path="/" component={Portfolio} />
        <Route exact path="/" component={Contact} /> */}
        </Switch>

      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
