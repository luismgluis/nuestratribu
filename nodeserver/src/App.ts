import * as admin from "firebase-admin";

import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";
import firebaseKey from "../firebaseKey.json";
import ApiDatabase from "./api/database/ApiDatabase";

class App {
  started: boolean;
  private _database: ApiDatabase | null;
  private _fireApp: admin.app.App | null;
  constructor() {
    this.started = false;
    this._database = null;
    this._fireApp = null;
  }
  start() {
    const firebaseAdmin = admin.initializeApp({
      credential: admin.credential.cert(firebaseKey as admin.ServiceAccount),
    });

    this._fireApp = firebaseAdmin;
    this._database = new ApiDatabase(this);

    this.started = true;

    console.log("app iniciada");
  }

  public get fireApp(): admin.app.App {
    if (!this.started) this.start();
    return this._fireApp;
  }

  public get firestore(): admin.firestore.Firestore {
    if (!this.started) this.start();
    const db = this._fireApp!.firestore();
    return db;
  }

  public get fireStorage(): admin.storage.Storage {
    if (!this.started) this.start();
    const storage = this._fireApp!.storage();
    return storage;
  }

  public get database(): ApiDatabase {
    if (!this.started) this.start();
    return this._database;
  }
}

export default App;
