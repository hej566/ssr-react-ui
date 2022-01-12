import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from '../client/App';
import './app.scss';

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    </Provider>,
    document.getElementById('app')
);