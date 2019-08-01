import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Modal } from './modal';

const App = () => (
    <div className="background-grid">
    <div className="overlay">
        {/* <header>
            <h1>curated</h1>
            <GreetingContainer />
        </header> */}
        <Switch>

            <Route exact path="/" component={SignupFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <ProtectedRoute path="/index" component={GreetingContainer} />
        </Switch>
        
        
        </div>
    </div>
);

export default App;