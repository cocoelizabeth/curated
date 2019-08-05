import React from 'react';
import NavContainer from './nav_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import IdeaIndexContainer from './idea_index_container';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal';
import Splash from './splash';

const App = () => (
    <div className="background-grid">
    <Modal />
        {/* <div className="overlay"> */}
        <Switch>
            <Route exact path="/" component={SignupFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <ProtectedRoute path="/index" component={IdeaIndexContainer} />
            <Route path="/splash" component={Splash} />
        </Switch>
{/*         
        </div> */}
    </div>
);

export default App;