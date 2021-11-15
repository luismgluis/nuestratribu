export interface UserInterface {
  firstName: string;
  middleName: string;
  lastName: string;
  secondSurname: string;
  phoneNumber: number;
  address: string;
  email: string;
}

class User implements UserInterface {
  firstName: string;
  middleName: string;
  lastName: string;
  secondSurname: string;
  phoneNumber: number;
  address: string;
  email: string;
  constructor(data: UserInterface | null) {
    this.firstName = data?.firstName || "";
    this.middleName = data?.middleName || "";
    this.lastName = data?.lastName || "";
    this.secondSurname = data?.secondSurname || "";
    this.phoneNumber = data?.phoneNumber || 0;
    this.address = data?.address || "";
    this.email = "";
  }
}
export default User;
