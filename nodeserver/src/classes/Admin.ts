import User, { UserInterface } from "./User";
export interface AdminInterface extends User {
  permissionsLevel: number;
  validation: boolean;
  idBusiness: string;
}
class Admin extends User implements AdminInterface {
  permissionsLevel: number;
  validation: boolean;
  idBusiness: string;
  constructor(data: AdminInterface | null) {
    super(data);
    this.permissionsLevel = data?.permissionsLevel || 0;
    this.validation = data?.validation || false;
  }
  exportToUpload() {
    const newObjectToUpload = {
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      secondSurname: this.secondSurname,
      phoneNumber: this.phoneNumber,
      address: this.address,
      email: this.email,
    };
    return newObjectToUpload;
  }
}

export default Admin;
