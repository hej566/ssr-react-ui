import React from 'react';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from '../client/App';

const renderer = (url) => {
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
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