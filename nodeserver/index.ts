import express from "express";
import App from "./src/App";

const appServer = express();

const app = new App();

const port = 5000;

appServer.get("/", (req, res) => {
  res.send("Server state = enabled....🍖ssssasda sdasdasd");
});

appServer.get("/getAdmin", function (req, res) {
  const idAdmin: any = req.query.id;
  if (!idAdmin) {
    res.send("id admin is required");
    return;
  }
  app.database
    .getAdmin(idAdmin)
    .then((adminResult) => {
      console.log(adminResult);
      const jsonAdmin = JSON.stringify(adminResult.exportToUpload());
      res.send(jsonAdmin);
    })
    .catch((err) => {
      console.log("Fail");
      res.send(err);
    });
});
appServer.post("/addAdmin", function (req, res) {
  const data: any = req.body;
  console.log(data);
  res.send("ok");
});

appServer.post("/post", function (req, res) {
  console.log("Esta es una request POST en /post");
  res.send("👋 POST");
  //firebase
  const newContact = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
  };

  res.send("received");
});

appServer.delete("/del", function (req, res) {
  console.log("Esta es una request DELETE en /del");
  res.send("👋 DELETE");
});

const server = appServer.listen(port, () => {
  console.log("Está corriendo en", `http://localhost:${port}`);
});

module.exports = server;
