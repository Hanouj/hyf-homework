class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    const currencyRes = fetch(`https://api.exchangerate-api.com/v4/latest/DKK`);
    currencyRes
      .then((response) => response.json())
      .then((data) => {
        console.log(data.rates);
      });
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    if (product instanceof Product) {
      this.products = this.products.filter(
        (element) => element.name !== product.name
      );
    } else {
      console.log("Not a product!");
    }
  }

  searchProduct(productName) {
    const findProduct = this.products.filter(
      (elment) => elment.name === productName
    );
    return findProduct;
  }

  getTotal() {
    let sum = 0;
    const totalProductPrice = this.products.map((elment) => elment.price);
    totalProductPrice.forEach((price) => {
      sum += price;
    });
    return sum;
  }

  renderProducts() {
    const section = document.getElementById("section");
    const productNum = document.getElementById("product-num");
    productNum.innerHTML = `${this.products.length} items in your cart`;
    section.appendChild(productNum);
    document.body.append(section);
    this.products.forEach((product) => {
      const ulProducts = document.createElement("ul");
      ulProducts.innerHTML = `Product name: ${product.name}`;
      section.appendChild(ulProducts);
      const liPrices = document.createElement("li");
      liPrices.innerHTML = `Product price: ${product.price}`;
      ulProducts.appendChild(liPrices);
    });
  }

  getUser(user, callback) {
    const res = fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
    res
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }
  renderUsername(data) {
    console.log(data);
    const userName = document.getElementById("user-name");
    const userHeader = document.createElement("h3");
    userHeader.innerHTML = `username:${data["username"]}`;
    userName.appendChild(userHeader);
  }
  renderProductPrice() {
    const productPrices = document.getElementById("products-price");
    const pPrices = document.createElement("h5");
    pPrices.innerHTML = `Total price:${this.getTotal()} `;
    productPrices.appendChild(pPrices);
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const headphones = new Product("headphones", 1000);
const glasses = new Product("glasses", 2000);
const computer = new Product("computer", 8000);
const playstation = new Product("playstation", 4500);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(glasses);
shoppingCart.addProduct(computer);
shoppingCart.removeProduct(headphones);
shoppingCart.removeProduct(playstation);
// Assuming dkr as default currency
const plant = new Product("plant", 50);
shoppingCart.addProduct(plant);
console.log(plant.convertToCurrency("dollars")); // 7.5
console.log(shoppingCart.products);

shoppingCart.getUser(1, shoppingCart.renderUsername);
shoppingCart.renderProducts();
shoppingCart.renderProductPrice();
