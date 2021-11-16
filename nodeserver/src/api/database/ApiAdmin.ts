import App from "../../App";
import Admin from "../../classes/Admin";

class ApiAdmin {
  app: App;
  constructor(app: App) {
    this.app = app;
  }

  async addAdmin(adminInfo: Admin) {
    const that = this;
    try {
      const db = that.app.firestore;
      const docSnap = await db
        .collection("admins")
        .add(adminInfo.exportToUpload());

      if (docSnap) {
        return true;
      }
      return false;
      // throw new Error("Fail to upload data");
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAdmin(idBusiness: string) {
    const that = this;
    try {
      const db = that.app.firestore;
      const docSnap = await db.collection("admins").doc(idBusiness).get();

      if (docSnap.exists) {
        //doc is read
        const data: any = docSnap.data();
        data.id = docSnap.id;
        const newadmin = new Admin(data);
        return newadmin;
      }
      throw new Error("Fail to upload data");
    } catch (error) {
      throw new Error(error);
    }
  }
}
export default ApiAdmin;
