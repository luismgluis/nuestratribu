import User, { UserInterface } from "./User";

class Admin extends User {
  permissions: Array<string>;
  validation: boolean;
  constructor(data: UserInterface) {
    super(data);
    this.permissions = [];
    this.validation = false;
  }
}

const admin = new Admin({
  firstName: "Juan",
  middleName: "José",
  lastName: "Lopez",
  secondSurname: "Suarez",
  phoneNumber: 3001234567,
  direction: "Calle 12 # 32 - 29",
});
admin.permissions = ["ss", "asda"];
admin.validation = true;

export default Admin;
