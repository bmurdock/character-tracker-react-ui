import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import SecureRoute from './components/SecureRoute';
import logo from "./logo.svg";
import "./App.scss";
import Login from "./pages/Login";
import CreateChar from "./pages/CreateChar";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import ViewChar from "./pages/ViewChar";
import ViewProfile from "./pages/ViewProfile";
import {LoggedInContext} from './Context';


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }
  logmein = event => {
    console.log("logging in");
    event.preventDefault();
    this.setState({
      loggedIn: true
    });
  };
  logmeout = () => {
    this.setState({
      loggedIn: false
    });
  };
  render() {
    return (
      <Router>
          <Switch>
            <LoggedInContext.Provider value={this.state.loggedIn}>

              <SecureRoute exact path="/" component={<Home />} />
              <Route exact path="/login">
                <Login login={this.logmein} />
              </Route>
              <SecureRoute exact path="/create-character" component={<CreateChar />}/>
              <SecureRoute exact path="/view-character" component={<ViewChar />}/>
              <SecureRoute exact path="/view-profile" component={<ViewProfile />}/>
              <SecureRoute exact path="/edit-profile" component={<EditProfile />}/>
              <Route exact path="/secret">
                <h1>Going to do some secret stufff</h1>
              </Route>

            </LoggedInContext.Provider>
          </Switch>
      </Router>
    );
  }
}

export default App;
