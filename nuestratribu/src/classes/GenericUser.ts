import User, { UserInterface } from "./User";

export interface GenericUserInterface extends User {
  gender: string;
  idCard: string;
  idBusiness: string;
  backupPhoneNumber: string;
  rhGroup: string;
}
class GenericUser extends User implements GenericUserInterface {
  backupPhoneNumber: string;
  idCard: string;
  idBusiness: string;
  rhGroup: string;
  gender: string;
  constructor(data: GenericUserInterface | null) {
    super(data);
    this.rhGroup = data?.rhGroup || "";
    this.idCard = data?.idCard || "";
    this.backupPhoneNumber = data?.backupPhoneNumber || "";
    this.gender = data?.gender || "";
    this.idBusiness = data?.idBusiness || "";
  }
  isEmpty() {
    if (
      this.firstName == "" &&
      this.backupPhoneNumber == "" &&
      this.idCard == ""
    ) {
      return true;
    }
    return false;
  }
  exportToUpload() {
    const newObjectToUpload = {
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      secondSurname: this.secondSurname,
      phoneNumber: this.phoneNumber,
      address: this.address,
      backupPhoneNumber: this.backupPhoneNumber,
      idCard: this.idCard,
      rhGroup: this.rhGroup,
      gender: this.gender,
      creationDate: this.creationDate,
      idBusiness: this.idBusiness,
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
