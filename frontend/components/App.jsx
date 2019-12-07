import React from 'react';
import NavContainer from './nav_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import IdeaIndexContainer from './idea_index_container';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modals/modal';
import Splash from './splash';
import IdeaShowContainer from './idea/idea_show_container';
import UserShowContainer from './user/user_show_container';
import CreateIdeaFormContainer from './idea/create_idea_form_container';
import CollectionShowContainer from './collections/collection_show_container';
import CreateCollectionFormContainer from './collections/create_collection_form_container';
import EditIdeaFormContainer from './idea/edit_idea_form_container';

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
            <Route path="/ideas/:ideaId" component={IdeaShowContainer} />
            <Route path="/users/:userId" component={UserShowContainer} />
            <Route path="/collections/:collectionId" component={CollectionShowContainer}/>
            <ProtectedRoute path="/create_idea" component={CreateIdeaFormContainer} />
            
            
        </Switch>

    </div>
);

export default App;