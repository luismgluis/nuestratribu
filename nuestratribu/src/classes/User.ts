export interface UserInterface {
  id: string; //solo para referencia interna
  firstName: string;
  middleName: string;
  lastName: string;
  secondSurname: string;
  phoneNumber: string;
  address: string;
  email: string;
  age: number;
  gender: string;
  creationDate: number;
}

class User implements UserInterface {
  id: string; //solo para referencia interna
  firstName: string;
  middleName: string;
  lastName: string;
  secondSurname: string;
  gender: string;
  phoneNumber: string;
  address: string;
  email: string;
  age: number;
  creationDate: number;
  constructor(data: UserInterface | null) {
    this.id = data?.id || "";
    this.firstName = data?.firstName || "";
    this.middleName = data?.middleName || "";
    this.lastName = data?.lastName || "";
    this.secondSurname = data?.secondSurname || "";
    this.phoneNumber = data?.phoneNumber || "";
    this.address = data?.address || "";
    this.email = data?.email || "";
    this.gender = data?.gender || "";
    this.age = data?.age || 0;
    this.creationDate = data?.creationDate || 0;
  }
  //
  isEmpty() {
    if (this.firstName === "") {
      return true;
    }
    return false;
  }
  exportToObject() {
    const newObjectToUpload = {
      id: this.id,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      secondSurname: this.secondSurname,
      phoneNumber: this.phoneNumber,
      address: this.address,
      email: this.email,
      gender: this.gender,
      age: this.age,
      creationDate: this.creationDate,
    };
    return newObjectToUpload;
  }
}
//}
export default User;
