import React, {Component as RC} from 'react';
import './Navigation.css';

class SubMenu extends RC{
    constructor(props)
    {
        super(props);
    }
    render(){
        return (
            <ul className="sub-menu" style={}>

            </ul>
        )
    }
}
export default class Navigation extends RC {
    constructor(props)
    {
        super(props);
        this.state = {

        }
    }
    render()
    {
        return(
            <nav className="main-nav">
                <ul className="nav-list">
                <li>
                    <a href="https://www.google.com" target="_blank">
                        Milk
                    </a>
                </li>
                <li>Eggs</li>
                <li>Bread</li>
                <li>Past</li>
                <li>Tylenol</li>
                <li>Cereal
                    <ul className="sub-menu">
                    <li>Cheerios</li>
                    <li>Honey Nut Cheerios</li>
                    <li>Multi-Grain Honey Nut Cheerios</li>
                    </ul>
                </li>
                </ul>

                <ul className="nav-list">
                <li>Milk</li>
                <li>Eggs</li>
                <li>Bread</li>
                <li>Past</li>
                <li>Tylenol</li>
                <li>Cereal</li>
                </ul>
            </nav>
        )
    }
}