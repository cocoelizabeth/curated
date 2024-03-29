import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({ store }) => (
    <Provider store = { store }>
        <HashRouter>
            <Switch>
                <App />
            </Switch>
        </HashRouter>
    </Provider>
);

export default Root;