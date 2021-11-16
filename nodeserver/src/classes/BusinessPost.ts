export interface BusinessPostInterface {
  id: string;
  title: string;
  subTitle: string;
  creationDate: number;
  description: string;
  body: string;
  author: string;
  categories: string;
  tags: string;
}
class BusinessPost {
  id: string;
  title: string;
  subtitle: string;
  creationDate: number;
  description: string;
  body: string;
  author: string;
  categories: string;
  tags: string;
  constructor(data: BusinessPostInterface | null) {
    this.id = data?.id || "";
    this.title = data?.title || "";
    this.subtitle = data?.subTitle || "";
    this.creationDate = data?.creationDate || 0;
    this.description = data?.description || "";
    this.body = data?.body || "";
    this.author = data?.author || "";
    this.categories = data?.body || "";
    this.tags = data?.tags || "";
  }
  isEmpty() {
    if (this.title == "") {
      return true;
    }
    return false;
  }
  getAdmins() {}
  exportToUpload() {
    const newObjectToUpload = {
      id: this.id,
      title: this.title,
      subtitle: this.subtitle,
      creationDate: this.creationDate,
      description: this.description,
      body: this.body,
      author: this.author,
      categories: this.categories,
      tags: this.tags,
    };
    return newObjectToUpload;
  }
}
export default BusinessPost;
