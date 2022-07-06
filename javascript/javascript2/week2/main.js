console.log("main loaded");

window.getAvailableProducts = function () {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomItem(availableProductNames) {
    return availableProductNames[
      getRandomInt(0, availableProductNames.length - 1)
    ];
  }

  function getRandomProductname() {
    const preWords = [
      "Used",
      "Fantastic",
      '"Used"',
      "Broken",
      "Beautiful",
      "Wet",
      "Green",
      "Sloppy",
      "Dirty",
    ];
    const productNames = [
      "Carrot",
      "Drone",
      "Giftcard",
      "Puppy",
      "Car",
      "Shirt",
      "Milk",
      "Chalk",
      "Fish fingers",
      "Socks",
      "Chocolate",
      "Toothbrush",
      "Computer",
      "Nokia",
      "Cologne",
    ];

    let chosenProductName = getRandomItem(productNames);
    const shouldHavePreWord = getRandomInt(0, 10) > 6;

    if (shouldHavePreWord) {
      const preWord = preWords[getRandomInt(0, preWords.length - 1)];
      chosenProductName = `${preWord} ${chosenProductName}`;
    }

    return chosenProductName;
  }

  const numberOfAvailableProducts = getRandomInt(0, 30);
  const availableProducts = Array.apply(
    null,
    Array(numberOfAvailableProducts)
  ).map(() => {
    const name = getRandomProductname();
    return {
      id: `${name}${getRandomInt(0, 100000)}`,
      name,
      price: getRandomInt(0, 10000),
      rating: getRandomInt(1, 10),
    };
  });

  return availableProducts;
};

//

const products = getAvailableProducts();
console.log(products);

const productList = document.querySelector(".product-list");

function renderProducts(products) {
  document.getElementById("product-list").innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const title = document.createElement("h3");
    title.classList.add("product-title");
    title.textContent = products[i].name;

    const price = document.createElement("p");
    price.classList.add("product-price");
    price.textContent = `Price: ${products[i].price}`;

    const rating = document.createElement("p");
    rating.classList.add("product-rating");
    rating.textContent = `Rating: ${products[i].rating}`;

    productList.appendChild(title);
    productList.appendChild(price);
    productList.appendChild(rating);
  }
}

renderProducts(products);

const inputForSearch = document.querySelector("#search-item");

inputForSearch.addEventListener("keyup", search);

function search() {
  const searchTerm = inputForSearch.value;

  const searchResult = [];

  for (let i = 0; i < products.length; i++) {
    var name = products[i].name;

    if (name.toUpperCase().includes(searchTerm.toUpperCase())) {
      searchResult.push(products[i]);
    }
  }

  renderProducts(searchResult);

  if (searchResult.length == 0) {
    const notFound = document.createElement("p");
    notFound.textContent = "Item not Found !";
    notFound.classList.add("not-found");
    productList.appendChild(notFound);
  }
}

const inputForMaxPrice = document.querySelector("#max-price");

inputForMaxPrice.addEventListener("keyup", setTheMaxPrice);

function setTheMaxPrice() {
  const maximumValue = inputForMaxPrice.value;
  const maximumPriceResult = [];

  for (let i = 0; i < products.length; i++) {
    const price = products[i].price;

    if (price < maximumValue) {
      maximumPriceResult.push(products[i]);
    }
  }
  renderProducts(maximumPriceResult);
}
