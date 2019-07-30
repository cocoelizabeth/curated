import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api.util';

document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root");
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    ReactDOM.render(<h1>Welcome to Curated</h1>, root);
});

