import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav>
            <h1>Weather Or Not</h1>
            <ul>
                <li>Profile</li>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </nav>
    );
}

export default Navbar;