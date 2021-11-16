import User, { UserInterface } from "./User";
export interface AdminInterface extends User {
  permissionLevel: number;
  validation: boolean;
  idBusiness: string;
}
class Admin extends User implements AdminInterface {
  validation: boolean;
  idBusiness: string;
  permissionLevel: number;
  constructor(data: AdminInterface | null) {
    super(data);
    this.idBusiness = data?.idBusiness || "";
    this.permissionLevel = data?.permissionLevel || 0;
    this.validation = data?.validation || false;
  }
  isEmpty() {
    if (this.firstName === "") {
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
      email: this.email,
      idBusiness: this.idBusiness,
      permissionLevel: this.permissionLevel,
      validation: this.validation,
      creationDate: this.creationDate,
    };
    return newObjectToUpload;
  }
}

export default Admin;

// niveles: 0: ver, 1: subir, 2: editar, 3: nuevos usuarios
