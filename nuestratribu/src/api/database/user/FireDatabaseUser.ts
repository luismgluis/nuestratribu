import User from "../../../classes/User";
import utils from "../../../libs/utils/utils";

import App from "../../App";

const TAG = "FIRE DATABASE USER";
class FireDatabaseUser {
  private app: App;
  private allUsers: any;
  constructor(app: App) {
    this.app = app;
    this.allUsers = {};
  }
  saveUser(user: User): Promise<User> {
    const that = this;
    return new Promise<User>((resolve, reject) => {
      try {
        that.app
          .database()
          .collection("admins")
          .doc(user.id)
          .set(user.exportToObject())
          .then(() => {
            // uploadImage(resolve, reject);
            resolve(user);
          })
          .catch((err) => {
            reject(err);
          });
      } catch (error) {
        reject(null);
      }
    });
  }
  createUserWithEmail(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    const that = this;
    const saveInfo = (uid: any, resolve: any, reject: any) => {
      const user = new User(null);
      user.id = uid;
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      that
        .saveUser(user)
        .then((result) => {
          resolve(uid);
        })
        .catch((err) => {
          reject(err);
        });
    };
    const create = (resolve: any, reject: any) => {
      this.app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          if (result !== null) {
            if (result.user) {
              saveInfo(result.user.uid, resolve, reject);
              return;
            }
          }
          reject(null);
        })
        .catch(async (err) => {
          console.log(TAG, err.code);
          const res = await that.app
            .database()
            .collection("admins")
            .where("email", "==", email)
            .get();
          if (res.empty) {
            err.uid = "";
          } else {
            const s = res.docs[0];
            err.uid = s.id;
            err.user = s.data();
          }

          if (`${err.code}`.includes("email-already-in-use")) {
            err.code = "Email en uso";
          } else {
            err.code = "Error de servidor, informa a soporte.";
          }
          reject(err);
        });
    };

    return new Promise<string>((resolve, reject) => {
      try {
        create(resolve, reject);
      } catch (error) {
        reject(null);
      }
    });
  }
  getAdmin(uid: string) {
    const that = this;
    const db = this.app.database();
    // console.log(TAG, "getuser");
    return new Promise<User>((resolve, reject) => {
      try {
        if (typeof that.allUsers[uid] !== "undefined") {
          resolve(that.allUsers[uid]);
          return;
        }
        db.collection("admins")
          .doc(uid)
          .get()
          .then((result) => {
            const data: any = result.data();
            console.log("then", data);
            if (!utils.objects.isEmpty(data)) {
              const user = new User(data);
              user.id = data.id;
              that.allUsers[uid] = user;
              resolve(user);
              return;
            }
            resolve(new User(null));
          })
          .catch((err) => {
            console.log("catch", err);
            reject(null);
          });
      } catch (error) {
        reject(null);
      }
    });
  }
}

export default FireDatabaseUser;
