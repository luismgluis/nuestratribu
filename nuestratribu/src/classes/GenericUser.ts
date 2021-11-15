import User, { UserInterface } from "./User";

class GenericUser extends User {
  age: number;
  gender: string;
  constructor(data: UserInterface) {
    super(data);
    this.age = 0;
    this.gender = "";
  }
}

const generalPopulation = new GenericUser({
  firstName: "pepe",
  middleName: "leo",
  lastName: "Rincón",
  secondSurname: "Serna",
  phoneNumber: 123456789,
  direction: "Calle 5",
});
generalPopulation.age = 24;
generalPopulation.gender = "M";

console.log(generalPopulation.age);
console.log(generalPopulation.gender);

export default GenericUser;
