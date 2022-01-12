import React from 'react';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from 'react-redux';
import App from '../client/App';

const renderer = (url, store) => {
    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </Provider>
    );
    return `
        <html lang="en">
            <head>
                <title>react-ui</title>
                <link rel="stylesheet" href="index.css">
            </head>
           
            <body>
                <div id="app">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}

export default renderer;