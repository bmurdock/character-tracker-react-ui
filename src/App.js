import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import Login from "./pages/Login";
import CreateChar from "./pages/CreateChar";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import ViewChar from "./pages/ViewChar";
import ViewProfile from "./pages/ViewProfile";



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
        {!this.state.loggedIn && (
          <Switch>
            <Route path="/" render={(props) => <Login {...props} login={this.logmein} /> }
          />
          </Switch>
        )}
        {this.state.loggedIn && (
          <Switch>
              <Route exact path="/" component={Home} />
            <Route exact path="/login" render={(props) => <Login {...props} login={this.logmein} /> } />
            <Route exact path="/home" component={Home}/>
            <Route exact path="/create-character" component={CreateChar}/>
            <Route exact path="/view-character" component={ViewChar}/>
            <Route exact path="/view-profile" component={ViewProfile}/>
            <Route exact path="/edit-profile" component={EditProfile}/>
            <Route exact path="/secret">
              <h1>Going to do some secret stufff</h1>
            </Route>
          </Switch>
        )}
      </Router>
    );
  }
}

export default App;
