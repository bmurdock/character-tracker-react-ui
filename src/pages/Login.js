import React, { Component as RC } from 'react';
import Page from '../components/Page';
import Banner from '../components/Banner';
import { LoggedInContext } from '../Context';
import { Redirect, Link } from 'react-router-dom';
import { TextField, FormRow } from '../components/FormComponents';
import { Tabs, Tab, TabPanel } from '../components/Tabs/Tabs';

var myId = 2392;

export default class Login extends RC {
    constructor(props) {
        super(props);
        this.state = {
            banner: '',
            username: '',
            password: ''
        };
    }
    // whenever a form field changes, look up the name property
    // in state and change that value to match form field value
    changeHandler = (event) =>
    {
        console.log('changing!')
        const fieldName = event.target.getAttribute('name');
        const stateObj = {};
        stateObj[fieldName] = event.target.value;
        // this is only necessary if you are displaying feedback to the user
        stateObj.feedbackMessage = '';
        stateObj.feedbackType = '';
        
        this.setState(stateObj);
    }
    componentDidMount() {
        this.setState({
            banner: (
                <Banner
                    image='https://background-tiles.com/overview/red/patterns/large/1056.png'
                    title='This tool will help you:'
                    content={
                        <ul>
                            <li>
                                Keep track of your Dungeons &amp; Dragons
                                characters
                            </li>
                            <li>Make friends with other players.</li>
                        </ul>
                    }
                />
            ),
        });
    }
    render() {
        let loggedIn = this.context;
        if (loggedIn) {
            return <Redirect to='/' />;
        }
        console.log(this.props.location)
        return (
            <Page banner={this.state.banner}>
                <Link to={{pathName: "/login", catId: {myId}, }}>Click This</Link>

                <Tabs tabs={[
                    <Tab label="Sign Up" index={0} />,
                <Tab label="Sign In" index={1} />
                ]} >
                    <TabPanel index={0}>Test 1</TabPanel>
                    <TabPanel index={1}>Test 2</TabPanel>
                </Tabs>


                <h3>Sign Up to Get Started!</h3>
                <form className="login-form" onSubmit={this.props.login}>
                    <FormRow>
                        <TextField label="Username" name='username' changeHandler={this.changeHandler} value={this.state.username} />
                    </FormRow>

                    <FormRow>
                        <label>Password</label>
                        <input type='password' name='password' value={this.state.password} onChange={this.changeHandler} />
                    </FormRow>
                    <input type="submit" defaultValue="Login" />
                </form>

            </Page>
        );
    }
}

Login.contextType = LoggedInContext;
