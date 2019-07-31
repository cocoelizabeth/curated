import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
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
        this.props.processForm(user);
    }

    renderErrros() {
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
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h2>welcome to curate</h2>
                    <br />
                    <h3>{this.props.subHead}</h3>
                    {/* //this.renderErrors// */}
                     <div className="login-form">
                        <br/>
                        <label>Email:
                            <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className ="login-input"
                            />
                        </label>
                        <br/>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update.apply('password')}
                                className="login-input"
                            />
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />

                        {/* // link to navLink here<Link to={this.props.navLink}>Help</Link> */}
                    </div>
                </form>
            </div>
          
        )
       
    }
    
}

export default SessionForm;