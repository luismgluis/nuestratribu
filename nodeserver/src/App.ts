class App {
  started: boolean;
  constructor() {}
  start() {
    console.log("app iniciada");
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
  delete() {
    return new Promise<string[]>((resolve, reject) => {
      try {
        resolve(["pepe", "pablo"]);
      } catch (error) {
        reject(null);
      }
    });
  }
}

export default App;
