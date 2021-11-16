import App from "../../App";
import Business from "../../classes/Business";
type BusinessSearchOption = "municipality" | "city";
class ApiBusiness {
  app: App;
  constructor(app: App) {
    this.app = app;
  }
  private async addCity(city: string) {
    const that = this;
    if (city == "" || city.length < 1) {
      return false;
    }
    city = city.toLowerCase();
    try {
      const db = that.app.firestore;
      const snap = await db
        .collection("cityAutoComplete")
        .where("name", "==", city)
        .get();
      if (snap.empty) {
        await db.collection("cityAutoComplete").add({ name: city });
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error);
    }
  }
  private async addMunicipality(municipality: string) {
    const that = this;
    if (municipality == "" || municipality.length < 1) {
      return false;
    }
    municipality = municipality.toLowerCase();
    try {
      const db = that.app.firestore;
      const snap = await db
        .collection("municipalityAutoComplete")
        .where("name", "==", municipality)
        .get();
      if (snap.empty) {
        await db
          .collection("municipalityAutoComplete")
          .add({ name: municipality });
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error);
    }
  }
  //getbusiness
  async addBusiness(businessInfo: Business) {
    const that = this;
    try {
      const db = that.app.firestore;
      const docSnap = await db
        .collection("businesses")
        .add(businessInfo.exportToUpload());

      await that.addCity(businessInfo.city);
      await that.addMunicipality(businessInfo.city);
      if (docSnap) {
        return true;
      }
      return false;
      // throw new Error("Fail to upload data");
    } catch (error) {
      throw new Error(error);
    }
  }

  async getBusiness(idUser: string) {
    const that = this;

    try {
      const db = that.app.firestore;
      const docSnap = await db.collection("businesses").doc(idUser).get();

      if (docSnap.exists) {
        //doc is read
        const data: any = docSnap.data();
        const newbusiness = new Business(data);
        return newbusiness;
      }
      throw new Error("Fail to upload data");
    } catch (error) {
      throw new Error(error);
    }
  }
  //end getbusiness
  // start getBusssinessPost

  async getBusinessByLocation(
    locationType: BusinessSearchOption,
    locationValue: string
  ) {
    const that = this;
    try {
      const db = that.app.firestore;
      const docSnap = await db
        .collection("businesses")
        .where(locationType, "==", locationValue)
        .get();

      if (!docSnap.empty) {
        //doc is read
        const arr: Business[] = [];
        docSnap.forEach((doc) => {
          const data: any = doc.data();
          data.id = doc.id;
          arr.push(new Business(data));
        });

        return arr;
      }
      return [];
    } catch (error) {
      console.log(error);
      throw new Error("Fail to read business");
    }
  }

  async getBusinessCities(nameType: BusinessSearchOption, nameValue: string) {
    const that = this;
    try {
      const db = that.app.firestore;
      const docSnap = await db
        .collection("businesses")
        .where(nameType, "==", nameValue)
        .get();
      if (!docSnap.empty) {
        //doc is read
        const arr: string[] = [];
        docSnap.forEach((doc) => {
          const data: any = doc.data();
          arr.push(data.name);
        });

        return arr;
      }
      return [];
    } catch (error) {
      console.log(error);
      throw new Error("Fail to read business");
    }
  }

  async getBusinessMunicipality() {
    const that = this;
    try {
      const db = that.app.firestore;
      const docSnap = await db.collection("municipalityAutocomplete").get();

      if (!docSnap.empty) {
        //doc is read
        const arr: string[] = [];
        docSnap.forEach((doc) => {
          const data: any = doc.data();
          arr.push(data.name);
        });

        return arr;
      }
      return [];
    } catch (error) {
      console.log(error);
      throw new Error("Fail to read business");
    }
  }
}

export default ApiBusiness;
