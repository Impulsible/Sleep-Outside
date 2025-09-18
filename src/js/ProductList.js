export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    // Fetch products
    const products = await this.dataSource.getData(this.category);

    // Clear existing list
    this.listElement.innerHTML = '';

    // Loop through products
    products.forEach(product => {
      const li = document.createElement('li');
      li.className = 'product-card';

      li.innerHTML = `
        <a href="product_detail.html?id=${product.id}">
          <img src="${product.PrimaryMedium}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
        </a>
      `;
      this.listElement.appendChild(li);
    });

    // Update page title
    const title = document.querySelector('.page-title');
    if (title) title.textContent = `Top Products: ${this.category}`;
  }
}
