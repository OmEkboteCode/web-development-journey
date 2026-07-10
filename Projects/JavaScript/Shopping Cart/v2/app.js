let cart = [];

const formatText = (text) => {
  return text.trim().toUpperCase();
};

function displayCart() {
  if (cart.length === 0) {
    return console.log("Cart is empty");
  }
  for (let idx = 0; idx < cart.length; idx++) {
    console.log(`${idx + 1}. ${cart[idx].name} 
    Stars: ${cart[idx].stars}
    Price: ${cart[idx].price}`);
  }
}

let displayMenu = () => {
  console.log(
    `=====Shopping Cart V2======
    1. Add Product
    2. View Cart
    3. Remove Product
    4. Checkout
    5. Exit`,
  );
  let option = parseInt(prompt("Choose an option:"));
  return option;
};

//Feature Functions

function addProduct() {
  let productName = prompt("Enter Product Name");
  productName = formatText(productName);
  while (productName === "") {
    console.log("Invalid product name. Please try again.");
    productName = prompt("Enter Product Name");
    productName = formatText(productName);
  }
  let stars = parseInt(prompt("Enter the Quality Stars 1-5"));
  while (stars > 5 || stars < 1) {
    console.log("Invalid Star numbers. Please try again");
    stars = parseInt(prompt("Enter the Quality Stars 1-5"));
  }
  let price = stars * 100;
  cart.push({
    name: productName,
    stars: stars,
    price: price,
  });
  console.log(`${productName} added successfully`);
}

function viewCart() {
  displayCart();
}

function removeProduct() {
  if (cart.length === 0) {
    return displayCart();
  }
  displayCart();

  let delNum = parseInt(
    prompt("Please enter the number of the product you want to remove"),
  );
  while (delNum > cart.length || delNum <= 0) {
    console.log("Invalid number. Please try again");
    delNum = parseInt(
      prompt("Please enter the number of the product you want to remove"),
    );
  }
  cart.splice(delNum - 1, 1);
  console.log(`Product successfully removed`);
  console.log("====YOUR CART====");
  displayCart();
}

function checkout() {
  let total = 0;
  if (cart.length === 0) {
    return displayCart();
  }
  console.log("=====CHECKOUT=====");
  displayCart();
  for (let idx = 0; idx < cart.length; idx++) {
    total += cart[idx].price;
  }
  console.log(
    "-------------------------------------------------------------------",
  );
  console.log(`Total : ${total}`);
  console.log("Thank You For Shopping!!");
  let itemNum = cart.length + 1;
  cart.splice(0, itemNum);
}

//Main Loop

let running = true;

while (running) {
  switch (displayMenu()) {
    case 5:
      console.log("Thank You for Visiting Us");
      running = false;
      break;
    case 1:
      addProduct();
      break;
    case 2:
      console.log("====YOUR CART====");
      viewCart();
      break;
    case 3:
      removeProduct();
      break;
    case 4:
        checkout()
      break;
    default:
      console.log("Invalid Option. Please try again");
      break;
  }
}
