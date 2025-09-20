import ProductData from './ProductData.mjs';
import { getParam } from './utils.mjs';

(async () => {
  const id = getParam('id');
  const category = getParam('category') || '';
  const productContent = document.getElementById('product-content');
  const backLink = document.getElementById('backToCategory');

  // ✅ Back link now uses /product_listing/
  if (backLink) {
    backLink.href = category
      ? `/product_listing/?category=${encodeURIComponent(category)}`
      : '/';
  }

  if (!id) {
    productContent.innerHTML = '<p>Missing product ID.</p>';
    return;
  }

  const dataSource = new ProductData();
  const product = await dataSource.findProductById(id);

  if (!product) {
    productContent.innerHTML = '<p>Product not found.</p>';
    return;
  }

  const name = product.Name || product.Title || '';
  const price = product.Price || '';
  const description = product.Description || product.LongDescription || '';
  const imgUrl = product.PrimaryLarge || '/images/placeholder.png';

  document.title = `Sleep Outside | ${name}`;

  productContent.innerHTML = `
    <article class="detail-card">
      <div class="detail-image">
        <img src="${imgUrl}" alt="${name}" />
      </div>
      <div class="detail-meta">
        <h1>${name}</h1>
        ${price ? `<p class="price">${price}</p>` : ''}
        <div class="description">${description || '<p>No description provided.</p>'}</div>
      </div>
    </article>
  `;
})();
