const baseURL = '../json/'; // adjust if your json is in a different folder

export default class ExternalServices {
  constructor(category) {
    this.category = category;
    this.path = `${baseURL}${this.category}.json`;
  }

  // fetch all products in the category
  async getData() {
    const response = await fetch(this.path);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${this.path}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  }

  // find a single product by its ID
  async findProductById(id) {
    const data = await this.getData();
    return data.find((item) => item.Id === id);
  }
}
