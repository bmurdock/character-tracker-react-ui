import React, {Component as RC} from 'react';
import './Navigation.css';
import navStructure from './navStructure';

class NavList extends RC{
    constructor(props)
    {
        super(props);
        console.log('constructor props: ', props);
        this.state = {
            listStyle: {
                display: 'flex',
            },
            navItems: [],
        }
    }

    shouldComponentUpdate(prevProps, prevState)
    {
        console.log('deciding whether to update');
        return true;
    }
    componentDidUpdate(prevProps)
    {
        console.log('updating: ', this.props);
        if (this.props.show !== prevProps.show)
        {
            console.log('visibility should change');
            const listStyle = {
                display: (this.props.show) ? 'flex' : 'none',
            };
            this.setState({
                listStyle,
            });
        }
    }

    componentDidMount()
    {
        let listStyle;
        if (this.props.type === 'main-menu')
        {
            listStyle = {
                display: 'flex',
            }
        }
        else
        {
            listStyle = {
                display: 'none',
            }
        }

        this.setState({
            navItems: this.props.structure.map((item, i) =>
            {
                return <NavItem key={`nav_${item.label.toLowerCase()}`} {...item} />
            }),
            listStyle,
        });
    }
    render(){
        return (
            <ul className={`nav-list ${this.props.type || 'sub-menu'} ${this.props.visibilityClass || ''}`} style={this.state.listStyle}>
                {this.state.navItems}
                {this.props.show}
            </ul>
        )
    }
}

class NavItem extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            submenu: null,
            visibilityClass: 'menu-hidden',
        }
    }

    componentDidMount()
    {
        // determine if this nav item has children
        // if so, it should get a sub menu
        if (this.props.children)
        {
            this.setState({
                submenu: <NavList structure={this.props.children} visibilityClass={this.state.visibilityClass} />
            })
        }   
    }
    showSub = () =>
    {
        if (this.props.children)
        {
            console.log('should show');
            this.setState({
                visibilityClass: 'menu-visible',
            })
        }

    }
    hideSub = () =>
    {
        if (this.props.children)
        {
            console.log('should hide');
            this.setState({
                visibilityClass: 'menu-hidden',
            })
        }

    }
    render(){
        return (
            <li onMouseEnter={this.showSub} onMouseLeave={this.hideSub}>
                {this.props.label}
                {this.state.submenu}
            </li>
        )
    }
}
export default class Navigation extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            navList: null,
        }
    }
    componentDidMount()
    {
        this.setState({
            navList: <NavList structure={navStructure} type='main-menu' />
        })
    }
    render()
    {
        return(
            <nav className="main-nav">
                {this.state.navList}
            </nav>
        )
    }
}