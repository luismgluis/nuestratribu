import App from "../../App";
import Admin from "../../classes/Admin";
import { collection, doc, setDoc, addDoc, getDoc } from "firebase/firestore";

class ApiDatabase {
  app: App;
  constructor(app: App) {
    this.app = app;
  }
  addGenericUser() {}
  removeGenericUser() {}
  removeAdmin() {}

  async addAdmin(adminInfo: Admin) {
    const that = this;
    try {
      // const db = that.app.firestore;
      // const dataToUpload = adminInfo.exportToUpload();

      // const docRef = await addDoc(collection(db, "admins"), dataToUpload);

      // if (docRef) {
      //   //doc is uploaded
      //   return docRef.id;
      // }
      throw new Error("Fail to upload data");
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAdmin(idAdmin: string) {
    const that = this;
    try {
      const db = that.app.firestore;
      const docSnap = await db.collection("admins").doc(idAdmin).get();

      if (docSnap.exists) {
        //doc is read
        const data: any = docSnap.data();
        const newadmin = new Admin(data);
        return newadmin;
      }
      throw new Error("Fail to upload data");
    } catch (error) {
      throw new Error(error);
    }
  }
  getAdminInfo() {}
  getAllAdmins() {
    const that = this;
    try {
      return [];
    } catch (error) {
      throw new Error("");
    }
  }
  getStaticUser() {
    console.log("devolver todos lo users");
    return ["pepe", "pablo"];
  }
  getAllUsers() {
    return new Promise<string[]>((resolve, reject) => {
      try {
        resolve(["pepe", "pablo"]);
      } catch (error) {
        reject(null);
      }
    });
  }
}
export default ApiDatabase;
