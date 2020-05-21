import React, {Component as RC} from 'react';
import Page from '../components/Page';

export default class Login extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <Page>
                <p>This tool will help you:
                    <ul>
                        <li>Keep track of your Dungeons &amp; Dragons characters</li>
                        <li>Make friends with other players.</li>
                    </ul>
                </p>
                <h3>Sign Up to Get Started!</h3>
                <form>
                    <label>Username</label>
                    <input type="text" name="username" />
                    <label>Password</label>
                    <input type="password" name="password" />
                </form>
            </Page>
        )
    }
}