import React from "react";
import './header.css';
// import Button from "../components/Button";

function Header() {
    return (
        <header>
            <a href="/" className="logo">Anime List</a>
            <ul className="nav">
            </ul>
            {/* <Button 
                icon={<ion-icon name="log-in-outline"></ion-icon>}
                name='Sign in'
            /> */}
            <a href="/" className="logo">My Preferences</a>
        </header>
    );
}

export default Header;
