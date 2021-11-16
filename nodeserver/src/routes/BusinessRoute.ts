import App from "./../App";
import { Express } from "express";
import Business from "../classes/Business";

const BusinessRoute = (appServer: Express, app: App) => {
  appServer.post("/addBusiness", function (req, res) {
    const data: any = req.body;
    if (!data) {
      res.send("Not data");
      return;
    }
    const newBusiness = new Business(data);
    if (newBusiness.isEmpty()) {
      res.send("Fail data");
      return;
    }
    newBusiness.creationDate = Math.round(new Date().getTime() / 1000);

    app.database.business
      .addBusiness(newBusiness)
      .then((result) => {
        console.log("Data upload", result);
        res.send("Data upload : " + newBusiness.name);
      })
      .catch((err) => {
        console.log(err);
        res.send("Data upload failed");
      });
  });

  appServer.get("/getBusiness", (req, res) => {
    const idBusiness: any = req.query.id;
    if (!idBusiness) {
      res.send("id User is required");
      return;
    }
    app.database.business
      .getBusiness(idBusiness)
      .then((userBusiness) => {
        console.log(userBusiness);
        const jsonA = JSON.stringify(userBusiness.exportToUpload());
        res.send(jsonA);
      })
      .catch((err) => {
        console.log("Fail");
        res.send(err);
      });
  });

  appServer.get("/getBusinessByLocation", async (req, res) => {
    const locationType: any = req.query.locationType;
    const locationValue: any = req.query.locationValue;
    let typeItsOk = false;
    switch (locationType) {
      case "city":
        typeItsOk = true;
        break;
      case "municipality":
        typeItsOk = true;
        break;
      default:
        break;
    }
    if (typeItsOk) {
      const result = await app.database.business.getBusinessByLocation(
        locationType,
        locationValue
      );
      if (!result) {
        res.send("Fail");
        return;
      }
      const newArr = result.map((businessItem) =>
        businessItem.exportToUpload()
      );

      res.send(JSON.stringify(newArr));
      return;
    }
    res.send("Error");
    // if (!idUser) {
    //   res.send("id User is required");
    //   return;
    // }
    // app.database
    //   .getGenericUser(idUser)
    //   .then((userResult) => {
    //     console.log(userResult);
    //     const jsonAdmin = JSON.stringify(userResult.exportToUpload());
    //   })
    //   .catch((err) => {
    //     console.log("Fail");
    //     res.send(err);
    //   });
  });

  appServer.get("/getBusinessCities", (req, res) => {
    // const name: any = req.query.name;
    // if (!name) {
    //   res.send("name is required");
    //   return;
    // }
    // if (typeItsOk) {
    //   const result = await app.database.business.getBusinessByLocation(
    //     nameType,
    //     nameValue
    //   );
    //   if (!result) {
    //     res.send("Fail");
    //     return;
    //   }
    //   const newArr = result.map((businessItem) =>
    //     businessItem.exportToUpload()
    //   );
    //   res.send(JSON.stringify(newArr));
    //   return;
    // }
  });
};

export default BusinessRoute;
