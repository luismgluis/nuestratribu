import App from "../../App";
import Admin from "../../classes/Admin";
import Business from "../../classes/Business";
import BusinessPost from "../../classes/BusinessPost";
import GenericUser from "../../classes/GenericUser";
import ApiBusiness from "./ApiBusiness";
import ApiAdmin from "./ApiAdmin";

class ApiDatabase {
  app: App;
  business: ApiBusiness;
  admin: ApiAdmin;
  constructor(app: App) {
    this.app = app;
    this.business = new ApiBusiness(app);
  }

  //end addbusiness
  // addGenericUser
  async addGenericUser(GenericUserInfo: GenericUser) {
    const that = this;
    try {
      const db = that.app.firestore;
      const docSnap = await db
        .collection("genericusers")
        .add(GenericUserInfo.exportToUpload());

      if (docSnap) {
        return true;
      }
      return false;
      // throw new Error("Fail to upload data");
    } catch (error) {
      throw new Error(error);
    }
  }
  // end GenericUser

  async addBusinessPost(businessPost: BusinessPost) {
    const that = this;
    try {
      const db = that.app.firestore;
      const docSnap = await db
        .collection("businessPosts")
        .add(businessPost.exportToUpload());

      if (docSnap) {
        return true;
      }
      return false;
      // throw new Error("Fail to upload data");
    } catch (error) {
      throw new Error(error);
    }
  }

  async getBusssinessPost(idPost: string) {
    const that = this;
    try {
      const db = that.app.firestore;
      const docSnap = await db.collection("businessPosts").doc(idPost).get();

      if (docSnap.exists) {
        //doc is read
        const data: any = docSnap.data();
        data.id = docSnap.id;
        const newData = new BusinessPost(data);
        return newData;
      }
      throw new Error("Fail to upload data");
    } catch (error) {
      throw new Error(error);
    }
  }

  async getGenericUser(idUser: string) {
    const that = this;
    try {
      const db = that.app.firestore;
      const docSnap = await db.collection("genericusers").doc(idUser).get();

      if (docSnap.exists) {
        //doc is read
        const data: any = docSnap.data();
        data.id = docSnap.id;
        const newData = new GenericUser(data);
        return newData;
      }
      throw new Error("Fail to upload data");
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default ApiDatabase;
