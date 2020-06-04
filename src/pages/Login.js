import React, { Component as RC } from 'react';
import Page from '../components/Page';
import Banner from '../components/Banner';
import { LoggedInContext } from '../Context';
import { Redirect } from 'react-router-dom';
import { TextField, FormRow } from '../components/FormComponents';
import { Tabs, Tab, TabPanel } from '../components/Tabs/Tabs';

export default class Login extends RC {
    constructor(props) {
        super(props);
        this.state = {
            banner: '',
        };
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
        return (
            <Page banner={this.state.banner}>
                <Tabs tabs={[
                    <Tab label="Sign Up" index={0} />,
                <Tab label="Sign In" index={1} />
                ]} >
                    <TabPanel>Test 1</TabPanel>
                    <TabPanel>Test 2</TabPanel>
                </Tabs>


                <h3>Sign Up to Get Started!</h3>
                <form className="login-form">
                    <FormRow>
                        <TextField label="Username" name='username' />
                    </FormRow>
                    <FormRow>
                        <label>Password</label>
                        <input type='password' name='password' />
                    </FormRow>
                </form>

                <button onClick={this.props.login}>Login</button>
            </Page>
        );
    }
}

Login.contextType = LoggedInContext;
