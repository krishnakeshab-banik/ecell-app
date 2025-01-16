import React from "react";
import logo from './assets/E-cell-logo.png';
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img
                    src={logo} // Path to your logo file
                    alt="E-Cell Logo"
                    className="ecell-logo"
                />
            </div>
            <nav className="nav-bar">
                <ul>
                    <li><a href="./home">Home</a></li>
                    <li><a href="./events">Events</a></li>
                    <li><a href="./"class="active">Team</a></li>
                    <li><a href="./about">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
