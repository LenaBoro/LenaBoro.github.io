import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
                <section className="w3-sidebar w3-bar-block header">
                    <li className="w3-bar-item w3-button">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="w3-bar-item w3-button">
                        <Link to="/about">About</Link>
                    </li>
                   </section>
        )
    }
}
export default Header;
/* <li className="w3-bar-item w3-button">
                        <Link to="/card">See more</Link>
                    </li>
                */