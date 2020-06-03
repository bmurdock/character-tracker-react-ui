import React, { Component, useState, useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';
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
    ClassesContext,
    RacesContext,
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

        let route = `http://localhost:3020/api/${model}`;
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
        console.log('logging in');
        event.preventDefault();
        this.setState({
            loggedIn: true,
            loggedInUser: {
                friends: [
                    '5ec5ce5221a43fd18b39a76a',
                    '5ec5cf8a7cbb90d1d19a68d3',
                ],
                _id: '5ec5cf7e7cbb90d1d19a68d2',
                username: 'user2',
                password: 'nope',
                displayName: 'user2',
                email: 'user2@whatever.com',
                createdAt: '2020-05-21T00:46:54.982Z',
                updatedAt: '2020-05-21T00:56:33.615Z',
            },
        });
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
                        value={{
                            classes: this.state.classes,
                            races: this.state.races,
                        }}
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
