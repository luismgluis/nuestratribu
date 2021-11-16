import express from "express";
import App from "./src/App";
import createRoutes from "./src/routes/routes";
const appServer = express();

const app = new App();

const port = 5000;

appServer.use(express.json());
appServer.use(express.urlencoded({ extended: true })); //necesary to read post parms

appServer.get("/", (req, res) => {
  res.send("Server state = enabled....🍖 -- m");
});

createRoutes(appServer, app);

const server = appServer.listen(port, () => {
  console.log("Está corriendo en", `http://localhost:${port}`);
});

module.exports = server;
