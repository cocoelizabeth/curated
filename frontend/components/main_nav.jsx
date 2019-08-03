import React from 'react';
import { Link } from 'react-router-dom';

const mainNav = ({ currentUser, logout }) => {

    // const left
//     const sessionLinks = () => (
//         <nav className="login-signup">
//             <Link to="/login">Login</Link>
//             &nbsp;or&nbsp;
//             <Link to="/signup">Sign Up</Link>
//         </nav>
//     );


    const personalGreeting = () => (

        <div className="main-nav">
        <div className="nav-group">
            <ul>
                    <li id="logo-container"> <a href="/index">
                    <img src={window.staticImages.logo} alt="curated-logo"></img>
                    </a> </li>
                <li id="search-box-container">
                    <i className="fas fa-search"></i>
                    <div className="search-box"></div>
                </li>
            </ul>
    
            <div className="button-container">
                <Link to="/index" id="nav-button" className="home-button">Home</Link>
                <Link to={`/${currentUser.username}/following`}  id="nav-button" className="following-button">Following</Link>
                <Link to={`/${currentUser.username}`} id="nav-button" className="user-button">
                     <div className="initial-icon">{currentUser.username.charAt(0).toUpperCase()}</div>
                    <div className="username">{currentUser.username}</div>
                 </Link>
            </div>
            <div className="dropdown">
                <i className="fas fa-ellipsis-h"></i>
            </div>
            {/* <button className="header-button>" onClick={logout}>Log Out</button> */}
        </div>
    </div>
    );

    return personalGreeting()
};

export default mainNav;