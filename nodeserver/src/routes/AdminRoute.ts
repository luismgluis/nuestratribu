import App from "./../App";
import { Express } from "express";
import Admin from "../classes/Admin";

const AdminRoute = (appServer: Express, app: App) => {
  appServer.get("/getAdmin", function (req, res) {
    const idBusiness: any = req.query.id;
    if (!idBusiness) {
      res.send("id admin is required");
      return;
    }
    app.database.admin
      .getAdmin(idBusiness)
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
    if (!data) {
      res.send("Not data");
      return;
    }
    const newAdmin = new Admin(data);
    if (newAdmin.isEmpty()) {
      res.send("Fail data");
      return;
    }
    newAdmin.creationDate = Math.round(new Date().getTime() / 1000);

    app.database.admin
      .addAdmin(newAdmin)
      .then((result) => {
        console.log("Data upload", result);
        res.send("Data upload : " + newAdmin.firstName);
      })
      .catch((err) => {
        console.log(err);
        res.send("Data upload failed");
      });
  });
};
export default AdminRoute;
