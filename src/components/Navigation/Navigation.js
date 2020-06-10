import React, { Component as RC } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import navStructure from './navStructure';
import {MenuContext} from '../../Context';

class NavList extends RC {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [],
        };
    }

    componentDidMount() {
        this.setState({
            navItems: this.props.structure.map((item, i) => {
                return (
                    <NavItem
                        key={`nav_${item.label.toLowerCase()}`}
                        {...item}
                    />
                );
            }),
        });
    }
    render() {
        return (
            <ul
                className={`nav-list ${this.props.type || 'sub-menu'} ${
                    this.props.visibilityClass || 'menu-visible'
                }`}
            >
                {this.state.navItems}
                {this.props.show}
            </ul>
        );
    }
}

class NavItem extends RC {
    constructor(props) {
        super(props);
        this.state = {
            submenu: null,
            visibilityClass: 'menu-hidden',
        };
    }

    showSub = () => {
        if (this.props.children) {
            this.setState({
                visibilityClass: 'menu-visible',
            });
        }
    };
    hideSub = () => {
        if (this.props.children) {
            this.setState({
                visibilityClass: 'menu-hidden',
            });
        }
    };
    render() {
        let submenu = null;
        let item;

        // determine if this nav item has children
        // if so, it should get a sub menu
        if (this.props.children) {
            submenu = (
                <NavList
                    structure={this.props.children}
                    visibilityClass={this.state.visibilityClass}
                />
            );
        }

        if (this.props.route) {
            item = (
                <Link className="nav-item" to={this.props.route}>
                    {this.props.label}
                </Link>
            );
        } else {
            item = <span className="nav-item">{this.props.label}</span>;
        }

        return (
            <li onMouseEnter={this.showSub} onMouseLeave={this.hideSub}>
                {item}
                {submenu}
            </li>
        );
    }
}
export default class Navigation extends RC {
    render() {
        return <nav className="main-nav desktop">
            <NavList structure={navStructure} type="main-menu" />
        </nav>;
    }
}
function MobileItem(props)
{
    // destructure props to pull out the 3 keys I care about
    let {label,route,children} = props;
    let item;
    let submenu;
    // if this nav item has a route, then it should be a link
    if (typeof route === 'string' && route !== '')
    {
        item = <Link to={route}>{label}</Link>;
    }
    // if there is no route, it is a span
    else
    {
        item = <span>{label}</span>
    }
    // if this nav item has children (submenu) then we need to add it
    if (typeof children !== 'undefined')
    {
        submenu = <MobileList structure={children} />
    }
    return (
        <li className="mobile-item">
            {item}
            {submenu}
        </li>
    )
}
function MobileList(props)
{
    const items = props.structure.map((item) =>
    {
        return <MobileItem key={`mnav_${item.label.toLowerCase()}`} {...item} />
    })
    return (
        <ul className="mobile-list">
            {items}
        </ul>
    )
}
export class MobileNav extends RC {
    render()
    {
        return(
            <nav className={`mobile-nav ${this.context}`}>
                <button onClick={this.props.toggler}>Close</button>
                <div className="mobile-nav-header">Menu</div>
                <MobileList structure={navStructure} />
            </nav>
        )
    }
}
MobileNav.contextType = MenuContext;