import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from '../client/App';
import './app.scss';

ReactDOM.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);