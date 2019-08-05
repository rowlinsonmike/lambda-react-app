// index.js
import serverless from "serverless-http";
import express from "express";
import path from "path";
// import middleware
import renderer from "./middleware/renderer.middleware";
const app = express();
// serve static assets
app.use(express.static("client/build"));
console.log();
// root (/) should always serve our server rendered page
app.use("^/$", renderer);
// handler
export const handler = serverless(app);
