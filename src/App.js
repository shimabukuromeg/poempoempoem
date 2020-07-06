import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Redirect, Route, Switch } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/:accountId" component={Profile} />
        <Route path="/" component={Home} />
        <Redirect to="/" />;
      </Switch>

      <Footer></Footer>
    </div>
  );
}

export default App;
