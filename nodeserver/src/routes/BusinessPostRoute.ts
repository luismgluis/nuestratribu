import App from "./../App";
import { Express } from "express";
import BusinessPost from "../classes/BusinessPost";

const BusinessPostRoute = (appServer: Express, app: App) => {
  appServer.post("/addBusinessPost", function (req, res) {
    const data: any = req.body;
    if (!data) {
      res.send("Not data");
      return;
    }
    const newBusinessPost = new BusinessPost(data);
    if (newBusinessPost.isEmpty()) {
      res.send("Fail data");
      return;
    }
    newBusinessPost.creationDate = Math.round(new Date().getTime() / 1000);

    app.database
      .addBusinessPost(newBusinessPost)
      .then((result) => {
        console.log("Data upload", result);
        res.send("Data upload : " + newBusinessPost.title);
      })
      .catch((err) => {
        console.log(err);
        res.send("Data upload failed");
      });
  });
  appServer.get("/getBusinessPost", (req, res) => {
    const idPost: any = req.query.id;
    if (!idPost) {
      res.send("id Post is required");
      return;
    }
    app.database.admin
      .getAdmin(idPost)
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
};

export default BusinessPostRoute;
