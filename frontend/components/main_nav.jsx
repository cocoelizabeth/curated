import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class MainNav extends React.Component {



    constructor(props){
        super(props);
        this.state = { dropdown: false };
        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
        this.handleLogOut = this.handleLogOut.bind(this);
    }



    renderDropdown() {
        if (this.state.dropdown) {
            return (
                <ul ref={dropdownRef => this.dropdownRef = dropdownRef} className="dropdown-visible">
                    <li><Link to="/settings" className="dropdown-list-item">Edit Settings</Link></li>
                    <li className="dropdown-list-item" onClick={this.handleLogOut}>Log Out</li>
                </ul>
            )
        }
    }

    // componentDidMount() {
    //     debugger
    //     if (this.props.currentUser.id) {
    //         this.props.fetchUser(this.props.currentUser.username);
    //     }
    // }

    handleLogOut() {
        debugger
        const { logout, history } = this.props;
        history.push('/login')
        logout()
    }

    handleClick(e) {
        if (this.dropdownRef && (this.dropdownRef.contains(e.target) || (this.dropdownButton.contains(e.target)))) {
            return 
        } else {
            this.setState({ dropdown: false})
            e.preventDefault();
            // e.stopPropagation()
        }
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false)
    }
            
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }
                      

    dropdownToggle (e) {
       this.setState({ dropdown: !this.state.dropdown });
    }

    

 render() {
    //  debugger

    const mainNav = () => (

        <div className="main-nav">
        <div className="main-nav-content">
            <div className="left-nav">
                <ul>
                    <li id="logo-container">
                        <Link to="/index">
                        <img src={window.staticImages.logo} alt="curated-logo"></img>
                        </Link>
                    </li>
                    <li id="search-box-container">
                        <i className="fas fa-search"></i>
                        <div className="search-box"></div>
                    </li>
                </ul>
            </div>
            
    
            <div className="right-nav">
                <ul className="nav-links"> 
                    <li><Link to="/index" id="nav-button" className="home-button">Home</Link></li>
                    <li><Link to={`/${this.props.currentUser.username}/following`}  id="nav-button" className="following-button">Following</Link></li>
                    <li>
                        <Link to={`/users/${this.props.currentUser.id}`} id="nav-button" className="user-button">
                            <div className="initial-icon">{this.props.currentUser.username.charAt(0).toUpperCase()}</div>
                            <div className="username">{this.props.currentUser.username}</div>
                        </Link>
                    </li>
                    <li id="divider"></li>
                    <li ref={dropdownButton => this.dropdownButton = dropdownButton} id="kebab-dropdown-button" onClick={this.dropdownToggle}>
                    <i className="fas fa-ellipsis-h">
                    </i></li>
                </ul>
            </div>
            {/* <button className="header-button>" onClick={logout}>Log Out</button> */}
        </div>
            {this.renderDropdown()}
    </div>
    );
    
    return mainNav()
    
 }
};


export default withRouter(MainNav);