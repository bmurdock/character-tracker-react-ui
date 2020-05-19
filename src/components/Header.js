import React, {Component as RC} from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import LoginButton from './LoginButton';

export class Simple extends RC {
    render()
    {
        return (<div>Simple</div>);
    }
}

export default class Header extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <header className="main-header">
                <Logo />
                <Navigation />
                <LoginButton />
            </header>
        )
    }
}