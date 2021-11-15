import { Db, MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin:20081601@clusterprimary.7ovm1.mongodb.net/testdb?retryWrites=true&w=majority";

class App {
  started: boolean;
  private _database: Db | null;
  private _dbClient: MongoClient | null;
  constructor() {
    this.started = false;
    this._database = null;
    this._dbClient = null;
  }
  start() {
    const that = this;
    this.started = true;
    const client = new MongoClient(uri, {});
    this._dbClient = client;
    client.connect((err) => {
      const db = client.db("testdb");
      that._database = db;
    });
  }
  async end() {
    const client = this._dbClient;
    if (client === null) return;
    await client.close();
  }

  public get database(): Db {
    if (!this._database) this.start();
    return this._database;
  }
  getUsers() {
    return new Promise<any>((resolve, reject) => {
      try {
        const result = this.database.collection("users").find({});
        result.toArray((err, res) => {
          console.log(res);
          resolve(res);
        });
      } catch (error) {
        reject(null);
      }
    });
  }
}
export default App;

/**
 
 */
