import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign Up</Link>
        </nav>
    );
  

    const personalGreeting = () => (
        <hgroup className="header-group">
            <div className="logo-container" height="48" width="48">
                <img src={window.staticImages.logo} alt="curated-logo" height="28" width="28"></img>
            </div>
            <h2 className="header-name">Hi, {currentUser.username}! Your feed is made up of these topics:</h2>
            <button className="header-button>" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;