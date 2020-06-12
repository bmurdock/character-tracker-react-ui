import React, { Component, useState, useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';
import config from './config';
import SecureRoute from './components/SecureRoute';
import './App.scss';
import Login from './pages/Login';
import CreateChar from './pages/CreateChar';
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';
import ViewChar from './pages/ViewChar';
import ViewProfile from './pages/ViewProfile';
import {
    LoggedInContext,
    LoggedInUserContext,
    AppNameContext,
    MergedContext,
} from './Context';

class App extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            loggedInUser: {},
            appName: 'Character Tracker',
            classes: [],
            races: [],
        };
    }
    // fetch ANY model from our API
    fetchModel = (model = '') => {
        // if this function is called without a valid model, return null
        if (typeof model !== 'string' || model === '') {
            return null;
        }

        let route = `${config.apiPath}/api/${model}`;
        fetch(route)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // we don't know the model name so we will set it programatically
                // create an empty object
                const stateObj = {};
                // set the key name using [] notation
                stateObj[model] = data;
                // feed that object to setState
                this.setState(stateObj);
            })
            .catch((err) => {
                console.log('Error fetching classes: ', err);
            });
    };
    logmein = (event) => {
        event.preventDefault();
        const [username, password, submit] = [].slice.call(event.target.elements);
        const route = `${config.apiPath}/login`;
        const body ={username: username.value, password: password.value};
        const fetchOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(body)
        }
        fetch(route, fetchOptions)
        .then((response) =>
        {
            if (response.status !== 200)
            {
                return {};
            }
            return response.json();
        })
        .then((data) =>
        {
            if (Object.keys(data).length)
            {
                this.setState({
                    loggedIn: true,
                    loggedInUser: data.user,
                })
            }
            // need to tell the user they entered wrong username/password
            // but i'm too lazy at the moment

        })
        .catch((err) =>
        {
            console.log('Error logging in...: ', err);
        })
    };
    logmeout = () => {
        this.setState({
            loggedIn: false,
        });
    };
    componentDidMount() {
        // get classes right at the start
        this.fetchModel('classes');
        // get races right at the start
        this.fetchModel('races');
    }
    render() {
        return (
            <Router>
                <Switch>
                    <MergedContext.Provider
                        value={this.state}
                    >
                        <AppNameContext.Provider value={this.state.appName}>
                            <LoggedInContext.Provider
                                value={this.state.loggedIn}
                            >
                                <LoggedInUserContext.Provider
                                    value={this.state.loggedInUser}
                                >
                                    <SecureRoute
                                        exact
                                        path='/'
                                        component={<Home />}
                                    />
                                </LoggedInUserContext.Provider>

                                <Route exact path='/login'>
                                    <Login login={this.logmein} />
                                </Route>
                                <SecureRoute
                                    exact
                                    path='/create-character'
                                    component={<CreateChar />}
                                />
                                <SecureRoute
                                    exact
                                    path='/view-character'
                                    component={<ViewChar />}
                                />
                                <SecureRoute
                                    exact
                                    path='/view-profile'
                                    component={<ViewProfile />}
                                />
                                <SecureRoute
                                    exact
                                    path='/edit-profile'
                                    component={<EditProfile />}
                                />
                            </LoggedInContext.Provider>
                        </AppNameContext.Provider>
                    </MergedContext.Provider>
                </Switch>
            </Router>
        );
    }
}

export default App;
