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
  }
}
export default User;
