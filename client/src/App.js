import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";
import AlertNotification from "./shared/components/AlertNotification";
import Subject from "./Subject/Subject";
import HomePage from "./HomePage/HomePage";
import Lecture from "./Subject/Lecture/Lecture";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/lecture">
            <Lecture />
          </Route>
          <Route path="/subject/:id" component={Subject} />
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <AlertNotification />
    </>
  );
}

export default App;
