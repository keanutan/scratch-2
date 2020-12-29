import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
    state = {
        burger: false,
        mobileWindow: false,
        windowSize: window.innerWidth
    };

    handleBurgerClick = () => {
            this.setState({ burger: !this.state.burger });
    }

    render() {
        return (
            <>
                <nav className='NavbarItems'>
                    <h1 className='brand-logo'>Brand</h1>
                    <ul className={(this.state.burger) ? 'menu-open' : 'menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li className='menu-li' key={index}>
                                    <a className='menu-a' href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className='burger' onClick={this.handleBurgerClick}>
                        <div className='burger-slice'></div>
                        <div className='burger-slice'></div>
                        <div className='burger-slice'></div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;