import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// TESTING
import { login, logout, signup } from './actions/session_actions';
import { createIdea, fetchIdea, fetchIdeas } from './actions/idea_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
   
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    let root = document.getElementById("root");
    ReactDOM.render(<Root store={ store }/>, root);

    // TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    // extra testing
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.createIdea = createIdea;
    window.fetchIdea = fetchIdea;
    window.fetchIdeas= fetchIdeas;
    // testing end


});

