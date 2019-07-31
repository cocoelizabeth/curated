import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <h1>curated</h1>
            <GreetingContainer />
        </header>
      
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;