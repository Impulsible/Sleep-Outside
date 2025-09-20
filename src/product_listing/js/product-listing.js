// js/product-listing.js
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import { getParam } from './utils.mjs';

(async () => {
  const category = getParam('category') || 'tents';
  const listElement = document.querySelector('.product-list');
  const dataSource = new ProductData();
  const myList = new ProductList(category, dataSource, listElement);
  await myList.init();

  // Update title
  function prettyCategory(slug) {
    return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
  document.getElementById('product-title').textContent = `Top Products: ${prettyCategory(category)}`;
})();
