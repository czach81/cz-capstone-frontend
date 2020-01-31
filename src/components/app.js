import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import HallOfFame from "./pages/hall_of_fame";
import Stats from "./pages/stats";
import Blog from "./pages/blog";



export default class App extends Component {
  render() {
    return (
      <div className="app">  
        <Router>
          <div>
            <div className="header-wrapper">
              <h1> Los Angeles Lakers Fan Page  </h1>
            </div>       
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/stats" component={Stats} />
              <Route path="/hall_of_fame" component={HallOfFame} />
              <Route path="/blog" component={Blog} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}