import React from 'react';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {



    constructor(props){
        super(props);
        this.state = { dropdown: false };
        this.dropdownVisible = this.dropdownVisible.bind(this);
        this.dropdownHidden = this.dropdownHidden.bind(this);
        
    }

        // const dropdown = () => (
    //     <ul ref={dropdownRef => this.dropdownRef = dropdownRef} className={this.state.dropdown}>
    //     </ul>
    // );
    renderDropdown() {
        if (this.state.dropdown) {
            return (
                <ul ref={dropdownRef => this.dropdownRef = dropdownRef} className="dropdown-visible">
                    <li><Link to="/settings" className="dropdown-list-item">Edit Settings</Link></li>
                    <li className="dropdown-list-item" onClick={this.props.logout}>Log Out</li>
                </ul>
            )
                    }
                }
            
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.dropdownHidden);
  }
                      
    dropdownHidden(e) {
        if (!this.dropdownRef.contains(e.target)) {
            this.setState({ dropdown: false });
            document.removeEventListener('mousedown', this.dropdownHidden)
        }
    }

    dropdownVisible (e) {
       this.setState({ dropdown: true });
       document.addEventListener('mousedown', this.dropdownHidden)
    }

    
   
        

 render() {

    const mainNav = () => (

        <div className="main-nav">
        <div className="main-nav-content">
            <div className="left-nav">
                <ul>
                    <li id="logo-container">
                        <a href="/index">
                        <img src={window.staticImages.logo} alt="curated-logo"></img>
                        </a>
                    </li>
                    <li id="search-box-container">
                        <i className="fas fa-search"></i>
                        <div className="search-box"></div>
                    </li>
                </ul>
            </div>
            
    
            <div className="right-nav">
                <ul>
                    <li><Link to="/#/index" id="nav-button" className="home-button">Home</Link></li>
                    <li><Link to={`/${this.props.currentUser.username}/following`}  id="nav-button" className="following-button">Following</Link></li>
                    <li>
                        <Link to={`/${this.props.currentUser.username}`} id="nav-button" className="user-button">
                            <div className="initial-icon">{this.props.currentUser.username.charAt(0).toUpperCase()}</div>
                            <div className="username">{this.props.currentUser.username}</div>
                        </Link>
                    </li>
                    <li id="divider"></li>
                    <li id="kebab-dropdown-button">
                    <i className="fas fa-ellipsis-h">
                    </i></li>
                </ul>
                {this.renderDropdown()}
            </div>
            {/* <button className="header-button>" onClick={logout}>Log Out</button> */}
        </div>
    </div>
    );
    
    return mainNav()
    
 }
};


export default MainNav;