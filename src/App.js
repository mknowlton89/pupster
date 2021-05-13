import React from 'react'
import './App.css';
import { Home } from './screens/Home/index';
import { About } from './screens/About/index';
import { Discover } from './screens/Discover/index';
import { Search } from './screens/Search/index';
import { NavBar } from './components/NavBar/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/discover">
          <Discover />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
