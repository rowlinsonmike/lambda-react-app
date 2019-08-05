// renderer.js
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
// import main App component
import App from "../client/src/App";
export default (req, res, next) => {
  // point build index.html
  const filePath = path.resolve("client", "./build", "index.html");
  // read in html file
  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      return res.send(err).end();
    }
    // render the app as a string
    const html = ReactDOMServer.renderToString(<App />);
    // inject the rendered app into our html and send it
    return res.send(
      // replace default html with rendered html
      htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
};
