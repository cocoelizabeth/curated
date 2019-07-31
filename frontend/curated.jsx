import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// TESTING
import { login, logout, signup } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
  

     // TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    // extra testing
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    // testing end

    let root = document.getElementById("root");
    ReactDOM.render(<Root store={ store }/>, root);


});

