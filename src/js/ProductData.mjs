const baseURL = import.meta.env.VITE_SERVER_URL;

export default class ProductData {
  constructor() {
    // No category needed here; will be passed in getData
  }

  // Fetch all products for a given category
  async getData(category) {
    try {
      const response = await fetch(`${baseURL}products/search/${category}`);
      const data = await response.json();
      return data.Result; // API returns products in Result property
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  // Fetch a single product by ID
  async getProductById(id) {
    try {
      const response = await fetch(`${baseURL}product/${id}`);
      const data = await response.json();
      return data.Result; // Single product
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      return null;
    }
  }
}
