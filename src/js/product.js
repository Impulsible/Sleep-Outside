import ProductDetails from './ProductDetails.mjs';
import ExternalServices from './ExternalServices.mjs';

// get the product id from the query string (?product=880RR)
const params = new URLSearchParams(window.location.search);
const productId = params.get('product');

// create a datasource for tents
const dataSource = new ExternalServices('tents');

// create the product details object and initialize it
const product = new ProductDetails(productId, dataSource);
product.init();
