import GenericUser from "../../classes/GenericUser";
import App from "../App";

import FireDatabaseUser from "./user/FireDatabaseUser";

class Database {
  app: App;
  user: FireDatabaseUser;
  constructor(app: App) {
    this.app = app;
    this.user = new FireDatabaseUser(app);
  }
  async getGenericUsers() {
    try {
      const db = this.app.database();
      const snap = await db
        .collection("genericusers")
        .orderBy("creationDate")
        .limitToLast(200)
        .get();
      if (!snap.empty) {
        let arr: GenericUser[] = [];
        snap.forEach((doc) => {
          const data: any = doc.data();
          data.id = doc.id;
          arr.push(new GenericUser(data));
        });
        return arr;
      }
      return [];
    } catch (error) {
      console.log(error);
      throw new Error("Fail");
    }
  }
}
export default Database;
