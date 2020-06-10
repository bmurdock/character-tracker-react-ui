import React, {Component as RC} from 'react';
import Logo from './Logo';
import Navigation, {MobileNav} from './Navigation/Navigation';
import LoginButton from './LoginButton';
import {MenuContext} from '../Context';

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
        this.state = {
            menuVisible: '',
        }
    }
    menuToggle = () =>
    {
        // use ternary statement to determine what the
        // state should be
        this.setState({
            menuVisible: (this.state.menuVisible === '') ?
            'menu-open' :
            ''
        });
    }
    render()
    {
        return(
            <header className="main-header">
                <Logo />
                <Navigation />
                <div className="mobile">
                    <button onClick={this.menuToggle}>Menu</button>
                </div>
                <MenuContext.Provider value={this.state.menuVisible}>
                    <MobileNav toggler={this.menuToggle} />
                </MenuContext.Provider>
            </header>
        )
    }
}