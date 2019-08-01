import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);

        this.props.processForm(user)
        .then(()=> this.props.history.push('/index'));
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                    
                ))}
            </ul>
        );
    }


      


    render () {
        return (
            <div className="login-form-container">
                <nav className="login-signup">
                    <Link to={this.props.navLink}>{this.props.navLinkText}</Link>
                </nav>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <img src={window.staticImages.logo} alt="curated-logo"  width="48"></img>
                    <h2>Welcome to curated</h2>
                
                    <h3>{this.props.subHead}</h3>
                    {this.renderErrors()}
                     <div className="login-form-fields">
                        
                        <label>
                            <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className ="login-input"
                                placeholder="Email"
                            />
                        </label>
        
                        <label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="Create a password"
                            />
                        </label>
                      
                        <input className="session-submit" type="submit" value={this.props.buttonText} />
                        <p>By continuing, you agree  to Pinterest's <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a></p>
                        <span> {this.props.bottomLink} </span>
                    </div>
                </form>
            </div>
          
        )
       
    }
    
}

export default SessionForm;