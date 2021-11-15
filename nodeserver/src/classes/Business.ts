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
  constructor(data: BusinessInterface | null) {
    this.name = data?.name || "";
    this.address = data?.address || "";
    this.neighborhood = data?.neighborhood || "";
    this.region = data?.region || "";
    this.municipality = data?.address || "";
    this.city = data?.city || "";
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
    };
    return newObjectToUpload;
  }
}
export default Business;
