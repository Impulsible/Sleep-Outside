import { getParam } from './utils.mjs';

const baseURL = import.meta.env.VITE_SERVER_URL;

async function loadProduct() {
  const id = getParam('id');
  const container = document.querySelector('.product-container');

  try {
    const response = await fetch(`${baseURL}product/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const product = data.Result;

    container.innerHTML = `
      <div class="product-card-detail">
        <img src="${product.PrimaryLarge}" alt="${product.Name}" />
        <div class="product-info">
          <h1>${product.Name}</h1>
          <h2>${product.Brand}</h2>
          <p class="price">$${product.Price}</p>
          <p class="description">${product.Description}</p>
        </div>
      </div>
    `;
  } catch (error) {
    container.innerHTML = `<p>Failed to load product. ${error.message}</p>`;
  }
}

document.addEventListener('DOMContentLoaded', loadProduct);
