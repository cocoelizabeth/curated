import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//  add event listener for the DOM content to be loaded before we render JSX  / react  files
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
    

    // Replaces entire content of target (root) with the component (<Root store..>)
    ReactDOM.render(<Root store={ store }/>, root);


});

