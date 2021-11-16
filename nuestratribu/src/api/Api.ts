import User from "../classes/User";
import App from "./App";
import Database from "./database/Database";

const TAG = "API";
class Api {
  private _app: App | null;
  private _database: Database | null;
  private _currentUser: User | null;
  static instance: any;

  constructor() {
    this._database = null;
    this._app = null;
    this._currentUser = null;

    if (typeof Api.instance === "object") {
      return Api.instance;
    }
    Api.instance = this;
    this.start();
  }
  private start() {
    this._app = new App();
    this._database = new Database(this._app);
    this._app.databaseFns = this._database;
  }

  public get app(): App {
    if (!this._app) this.start();
    return this._app!;
  }

  public get database(): Database {
    if (!this._database) this.start();
    return this._database!;
  }
  public get currentUser(): User {
    if (!this._currentUser) return new User(null);
    return this._currentUser;
  }
}
export default new Api();
