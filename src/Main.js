import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./components/index.css";

import Home from "./components/Home";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";


export default function Main(props) {
  return (
    <HashRouter>
      <div>
        <h1>Canadian Crescendo</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/service">Service</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </div>
    </HashRouter>

  );
}

