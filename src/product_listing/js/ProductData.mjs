// js/ProductData.mjs
const baseURL = import.meta.env.VITE_SERVER_URL;

export default class ProductData {
  async getData(category) {
    try {
      const res = await fetch(`${baseURL}products/search/${category}`);
      const data = await res.json();
      return data.Result || [];
    } catch (err) {
      console.error('getData error', err);
      return [];
    }
  }

  async findProductById(id) {
    try {
      const res = await fetch(`${baseURL}product/${id}`);
      const data = await res.json();
      return data.Result || null;
    } catch (err) {
      console.error('findProductById error', err);
      return null;
    }
  }
}
