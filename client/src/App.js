import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Background from "./components/Background";
import Gallery from "./components/Gallery";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/background" component={Background} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
