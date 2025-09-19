import ProductData from './ProductData.mjs';
import ProductList from './ProductList.js';
import { loadHeaderFooter, getParam } from './utils.mjs';

// Load header and footer
loadHeaderFooter();

// Get category from URL
const category = getParam('category');

// Create ProductData instance
const dataSource = new ProductData();

// Select container element
const listElement = document.querySelector('.product-list');

// Create ProductList instance
const myList = new ProductList(category, dataSource, listElement);

// Initialize rendering
myList.init();

document.querySelector('.page-title').textContent = `Top Products: ${category}`;
