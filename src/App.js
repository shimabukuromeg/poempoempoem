import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Redirect to="/" />;
      </Switch>
    </div>
  );
}

export default App;
