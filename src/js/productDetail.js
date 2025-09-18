import ProductData from './ProductData.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

async function displayProduct() {
  const id = getParam('id');
  const dataSource = new ProductData();
  const product = await dataSource.getProductById(id);

  if (!product) return;

  // Fill product detail container
  const container = document.querySelector('.product-detail');
  container.innerHTML = `
    <h1>${product.name}</h1>
    <img src="${product.PrimaryLarge}" alt="${product.name}" />
    <p>Category: ${product.category}</p>
    <p>Price: $${product.price.toFixed(2)}</p>
    <p>${product.description}</p>
  `;
}

displayProduct();
