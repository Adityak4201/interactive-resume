import React from "react";
import {BrowserRouter, Switch, NavLink, Route} from "react-router-dom";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div className="navbar">
      <NavLink to ="/" activeClassName="activeMenu">
        Home
      </NavLink>
      <NavLink to="/react" activeClassName="activeMenu">
        React JS
      </NavLink>
      <NavLink to="/node" activeClassName="activeMenu">
        Node JS
      </NavLink>
      <NavLink to="/express" activeClassName="activeMenu">
        Express JS
      </NavLink>
      <NavLink to="/html5" activeClassName="activeMenu">
        HTML5
      </NavLink>
      <NavLink to="/css3" activeClassName="activeMenu">
        CSS3
      </NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
