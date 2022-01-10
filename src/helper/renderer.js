import React from 'react';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Routes from '../router/routes';

const renderer = (url) => {
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={url}>
            <Routes />
        </StaticRouter>
    );
    return `
        <html lang="en">
            <title>react-ui</title>
            <body>
                <div id="app">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}

export default renderer;