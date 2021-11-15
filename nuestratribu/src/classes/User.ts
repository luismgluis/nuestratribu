export interface UserInterfaceExample {
  email: string;
}
export interface UserInterface {
  firstName: string;
  middleName: string;
  lastName: string;
  secondSurname: string;
  phoneNumber: number;
  direction: string;
}

class User implements UserInterface, UserInterfaceExample {
  firstName: string;
  middleName: string;
  lastName: string;
  secondSurname: string;
  phoneNumber: number;
  direction: string;
  email: string;
  constructor(data: UserInterface | null) {
    this.firstName = data?.firstName || "";
    this.middleName = data?.middleName || "";
    this.lastName = data?.lastName || "";
    this.secondSurname = data?.secondSurname || "";
    this.phoneNumber = data?.phoneNumber || 0;
    this.direction = data?.direction || "";
    this.email = "";
  }
}
export default User;
