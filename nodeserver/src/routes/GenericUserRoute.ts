import App from "./../App";
import { Express } from "express";
import GenericUser from "../classes/GenericUser";

// post Generic User
const GenericUserRoute = (appServer: Express, app: App) => {
  appServer.post("/addGenericUser", function (req, res) {
    const data: any = req.body;
    if (!data) {
      res.send("Not data");
      return;
    }
    const newGenericUser = new GenericUser(data);
    if (newGenericUser.isEmpty()) {
      res.send("Fail data");
      return;
    }
    newGenericUser.creationDate = Math.round(new Date().getTime() / 1000);

    app.database
      .addGenericUser(newGenericUser)
      .then((result) => {
        console.log("Data upload", result);
        res.send("Data upload : " + newGenericUser.firstName);
      })
      .catch((err) => {
        console.log(err);
        res.send("Data upload failed");
      });
  });
  // get
  appServer.get("/getGenericUser", (req, res) => {
    const idUser: any = req.query.id;
    if (!idUser) {
      res.send("id User is required");
      return;
    }
    app.database
      .getGenericUser(idUser)
      .then((userResult) => {
        console.log(userResult);
        const jsonAdmin = JSON.stringify(userResult.exportToUpload());
        res.send(jsonAdmin);
      })
      .catch((err) => {
        console.log("Fail");
        res.send(err);
      });
  });
};
export default GenericUserRoute;
