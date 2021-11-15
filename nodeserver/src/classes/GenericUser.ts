import User, { UserInterface } from "./User";

class GenericUser extends User {
  age: number;
  gender: string;
  constructor(data: UserInterface) {
    super(data);
    this.age = 0;
    this.gender = "";
  }
  exportToUpload() {
    const newObjectToUpload = {
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      secondSurname: this.secondSurname,
      phoneNumber: this.phoneNumber,
      address: this.address,
    };
    return newObjectToUpload;
  }
}

// const generalUser = new GenericUser({
//   firstName: "pepe",
//   middleName: "leo",
//   lastName: "Rincón",
//   secondSurname: "Serna",
//   phoneNumber: 123456789,
//   direction: "Calle 5",
// });
// generalUser.age = 24;
// generalUser.gender = "M";

// console.log(generalUser.age);
// console.log(generalUser.gender);

export default GenericUser;
