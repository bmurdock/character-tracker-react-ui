import React, {Component as RC} from 'react';
import Page from '../components/Page';
import Banner from '../components/Banner';

export default class Login extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            banner: ''
        };
    }
    componentDidMount()
    {
        this.setState({
            banner: <Banner
                        image='https://background-tiles.com/overview/red/patterns/large/1056.png'
                        title="This tool will help you:"
                        content={
                        <ul>
                            <li>Keep track of your Dungeons &amp; Dragons characters</li>
                            <li>Make friends with other players.</li>
                        </ul>
                        }
                    />
        });
    }
    render()
    {
        return(
            <Page banner={this.state.banner}>
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