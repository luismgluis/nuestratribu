// Tratamos como business a cada junta de accion comunal
export interface BusinessInterface {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  idPresident: string;
  neighborhood: string;
  region: string;
  municipality: string;
  city: string;
  creationDate: number;
}
class Business implements BusinessInterface {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  idPresident: string;
  neighborhood: string;
  region: string;
  municipality: string;
  city: string;
  creationDate: number;
  constructor(data: BusinessInterface | null) {
    this.id = data?.id || "";
    this.name = data?.name || "";
    this.address = data?.address || "";
    this.phoneNumber = data?.phoneNumber || "";
    this.idPresident = data?.idPresident || "";
    this.neighborhood = data?.neighborhood || "";
    this.region = data?.region || "";
    this.municipality = data?.municipality || "";
    this.city = data?.city || "";
    this.creationDate = data?.creationDate || 0;
  }
  isEmpty() {
    if (this.name == "") {
      return true;
    }
    return false;
  }
  getAdmins() {}
  exportToUpload() {
    const newObjectToUpload = {
      name: this.name,
      address: this.address,
      phoneNumber: this.phoneNumber,
      idPresident: this.idPresident,
      neighborhood: this.neighborhood,
      region: this.region,
      municipality: this.municipality,
      city: this.city,
      creationDate: this.creationDate,
    };
    return newObjectToUpload;
  }
}
export default Business;
