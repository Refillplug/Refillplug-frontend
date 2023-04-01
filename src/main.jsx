import './style.sass';
import React from 'react';
import store from './store';
import Router from './routers';
import * as Redux from 'react-redux';
import reactDom from 'react-dom/client';

reactDom.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <Redux.Provider store={store}>
            <Router />
        </Redux.Provider>
    </React.StrictMode>
);