import * as express from "express";
import App from "./src/App";

const appServer = express();
const app = new App();

const port = 5000;
const server = appServer.listen(port, () => {
  console.log("Está corriendo en", `http://localhost:${port}`);
});

appServer.get("/getUsers", function (req, res) {
  //----
  const algo = app.getStaticUser();

  console.log(algo.length);

  const ppp = app.getAllUsers();
  ppp.then((data) => {
    console.log(data);
  });

  ppp.catch((error) => {
    console.log(error);
  });

  app
    .getAllUsers()
    .then((dataResult) => {
      console.log(dataResult);
      res.send("Esta es una request POST en Home 🏠");
    })
    .catch((error) => {
      console.error(error);
      res.send("Esta vaina fallo");
    });
  //--------
});

appServer.post("/post", function (req, res) {
  console.log("Esta es una request POST en /post");
  res.send("👋 POST");
});

appServer.delete("/del", function (req, res) {
  const ppp = app.;
  console.log("Esta es una request DELETE en /del");
  res.send("👋 DELETE");
});

//import test from "./src/test";
//import testdb from "./src/testdb";
//import App from "./src/App";

// const PORT = Number(process.env.PORT) || 8080;
// const appx = express();
// const app = new App();
//app2.start();

// const a = "aa";
// appx.get("/", (req, res) => {
//   res.send("🎉 Hello TypeScript!!!!! 🎉" + test.name);
// });

// appx.get("/db", (req, res) => {
//   app.getUsers().then((data) => {
//     res.send(JSON.stringify(data));
//   });
// });

// const server = appx.listen(PORT, () => {
//   console.log(`Server start http://localhost:${PORT}`);
//   console.log(`App listening on port ${PORT}`);
// });

// module.exports = server;
