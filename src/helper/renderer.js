import React from 'react';
import { renderToString } from "react-dom/server";

const renderer = (Component) => {
    const content = renderToString(<Component />);
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