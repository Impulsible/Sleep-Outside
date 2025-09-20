import { setLocalStorage } from './utils.mjs';

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // get product details from the datasource
    this.product = await this.dataSource.findProductById(this.productId);

    // render product details
    this.renderProductDetails();

    // add event listener for add to cart
    document
      .getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
  }

  renderProductDetails() {
    const detailsElement = document.getElementById('product-detail');

    detailsElement.innerHTML = `
      <h3>${this.product.Brand}</h3>
      <h2 class="divider">${this.product.Name}</h2>
      <img
        class="divider"
        src="../${this.product.Image}"
        alt="${this.product.Name}"
      />
      <p class="product-card__price">$${this.product.FinalPrice}</p>
      <p class="product__color">${this.product.Colors}</p>
      <p class="product__description">${this.product.Description}</p>
      <div class="product-detail__add">
        <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
      </div>
    `;
  }

  addProductToCart() {
  // store in localStorage (cart)
  setLocalStorage('so-cart', this.product);
}

}
